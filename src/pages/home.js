import React from "react";
import { Row, Col, Input, Select, Button, notification } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";

import Face from "../assets/images/face.png";

import { UserApi, SearchApi } from "../api/user";
import Loader from "../components/loader";

const { Option } = Select;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
      type: "",
      loading: false,
      redirect: false,
      data: [],
    };
  }

  submitClicked = async () => {
    this.setState({
      loading: true,
    });
    if (this.state.type === "user") {
      const response = await UserApi(this.state.word);
      if (response.status === 200 && response.data.length > 0) {
        this.setState({
          data: await response.data,
          loading: false,
          redirect: true,
        });
      } else {
        this.setState({
          loading: false,
        });
        notification.warning({
          message: "Something went Wrong",
          description:
            "This may have happened because there is no user on twitter with that username or there was a network error.",
        });
      }
    } else {
      const response = await SearchApi(this.state.word);
      if (response.status === 200 && response.data.length > 0) {
        this.setState({
          data: await response.data,
          loading: false,
          redirect: true,
        });
      } else {
        this.setState({
          loading: false,
        });
        notification.warning({
          message: "Something went Wrong",
          description:
            "This may have happened because there is no tweet on twitter containing that word or there was a network error.",
        });
      }
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/analytics",
            state: { data: this.state.data },
          }}
        />
      );
    }
    return (
      <Row>
        <Col xs={0} sm={0} md={0} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Face}
              alt="Emotions"
              style={{ maxHeight: "100vh", width: "auto" }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ height: "100vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              padding: "2%",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#5995ed",
              }}
            >
              What the tweet?
            </h1>
            <br />
            <p style={{ fontSize: "25px", fontWeight: "500" }}>
              Wtt provides free and fast sentiment analysis for your brand from
              the tweets on twitter.
            </p>
            <Input.Group style={{ paddingRight: "4%" }}>
              <Input
                style={{ width: "70%" }}
                size="large"
                placeholder="Enter Search Term"
                value={this.state.word}
                onChange={(event) =>
                  this.setState({ word: event.target.value })
                }
              />
              <Select
                placeholder="Options"
                size="large"
                style={{ width: "30%" }}
                onChange={(event) => this.setState({ type: event })}
              >
                <Option value="user">Username</Option>
                <Option value="word">Query</Option>
              </Select>
            </Input.Group>
            <div style={{ marginTop: "30px", width: "100%" }}>
              <Button
                icon={<PieChartOutlined />}
                type="primary"
                style={{
                  borderRadius: "15px",
                }}
                disabled={
                  this.state.type.length > 0 && this.state.word.length > 0
                    ? false
                    : true
                }
                onClick={this.submitClicked}
                size="large"
              >
                Analyse
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
