import React from "react";
import { Row, Col } from "antd";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";

class GraphOne extends React.Component {
  render() {
    const data = [
      { x: "Total Tweets", Count: this.props.total },
      { x: "Positive Tweets", Count: this.props.positive },
      { x: "Negative Tweets", Count: this.props.negative },
      { x: "Neutral Tweets", Count: this.props.neutral },
    ];
    const data_two = [
      { x: "Positive Tweets", Count: this.props.positive },
      { x: "Negative Tweets", Count: this.props.negative },
      { x: "Neutral Tweets", Count: this.props.neutral },
    ];
    const COLORS = ["#00C49F", "#C42021", "#0088FE"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    return (
      <Row style={{ marginTop: "20px", padding: "1%" }}>
        <Col span={24}>
          <h1 style={{ fontWeight: "700" }}>Data Visualization</h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16} xl={16}>
          <div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Count" fill="#19297C" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={730} height={250}>
              <Pie
                data={data_two}
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={40}
                fill="#8884d8"
                dataKey="Count"
                nameKey="x"
              >
                {data_two.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    );
  }
}

export default GraphOne;
