import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <Row style={{ backgroundColor: "#ffffff", minHeight: "10vh" }}>
        <Col span={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "700" }}>
              <Link to="/">Wtt</Link>
            </h1>
            <h3 style={{ margin: 0, fontSize: "15px", fontWeight: "500" }}>
              Analytics
            </h3>
          </div>
        </Col>
        <Col span={18} />
      </Row>
    );
  }
}

export default Nav;
