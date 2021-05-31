import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import { Row, Col } from "antd";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

class WordCloud extends React.Component {
  render() {
    return (
      <Row style={{ padding: "1%" }}>
        <Col span={24}>
          <div>
            <h1 style={{ fontWeight: "700" }}>Word Cloud</h1>
            <Resizable style={resizeStyle}>
              <div style={{ width: "100%", height: "100%" }}>
                <ReactWordcloud
                  options={{ fontSizes: [20, 40] }}
                  words={this.props.words}
                />
              </div>
            </Resizable>
          </div>
        </Col>
      </Row>
    );
  }
}

export default WordCloud;
