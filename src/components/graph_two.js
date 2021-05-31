import React from "react";
import { Row, Col } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class GraphTwo extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: "20px", padding: "1%" }}>
        <Col span={24}>
          <h1 style={{ fontWeight: "700" }}>Most Frequent Words</h1>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                width={730}
                height={250}
                data={this.props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="text" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    );
  }
}

export default GraphTwo;
