import React from "react";

import Nav from "../components/nav";
import Count from "../components/count";
import GraphOne from "../components/graph_one";
import { withRouter, Redirect } from "react-router-dom";
class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      total: 0,
      positive: 0,
      negative: 0,
      neutral: 0,
    };
  }
  componentDidMount = async () => {
    const response = await this.props.location.state.data;
    var positive, negative, neutral;
    positive = negative = neutral = 0;
    response.forEach((tweet) => {
      if (tweet.scores.label === 0) {
        negative = negative + 1;
      } else if (tweet.scores.label === 1) {
        neutral = neutral + 1;
      } else {
        positive = positive + 1;
      }
    });
    this.setState({
      total: negative + neutral + positive,
      negative: negative,
      positive: positive,
      neutral: neutral,
    });
  };
  render() {
    if (!this.props.location.state) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ backgroundColor: "#BFD7EA", minHeight: "100vh" }}>
        <Nav />
        <Count
          total={this.state.total}
          positive={this.state.positive}
          neutral={this.state.neutral}
          negative={this.state.negative}
        />
        <GraphOne
          total={this.state.total}
          positive={this.state.positive}
          neutral={this.state.neutral}
          negative={this.state.negative}
        />
      </div>
    );
  }
}

export default withRouter(Result);
