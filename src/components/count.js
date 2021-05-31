import React from "react";
import { Row, Col } from "antd";

// This is the component on top with count of different types of tweet

class Count extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: "2%", minHeight: "20vh", padding: "1%" }}>
        <Col span={24}>
          <h1 style={{ fontWeight: "700" }}>Dashboard</h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "1%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "700" }}>
              {this.props.total}
            </h1>
            <h4 style={{ margin: 0 }}>Tweets</h4>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "1%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "700" }}>
              {this.props.positive}
            </h1>
            <h4 style={{ margin: 0 }}>Positive Tweets</h4>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "1%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "700" }}>
              {this.props.negative}
            </h1>
            <h4 style={{ margin: 0 }}>Negative Tweets</h4>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "1%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "700" }}>
              {this.props.neutral}
            </h1>
            <h4 style={{ margin: 0 }}>Neutral Tweets</h4>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Count;
