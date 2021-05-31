import React from "react";
import Nav from "../components/nav";
import Count from "../components/count";
import GraphOne from "../components/graph_one";
import WordCloud from "../components/word_cloud";
import GraphTwo from "../components/graph_two";

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
      words: [],
    };
  }
  componentDidMount = async () => {
    const response = await this.props.location.state.data;
    var positive, negative, neutral;
    var stateWord = [];
    // eslint-disable-next-line
    // var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var format = /^[a-zA-Z]+$/;
    positive = negative = neutral = 0;
    response.forEach((tweet) => {
      var arr_words = tweet.text.split(" ");
      arr_words.forEach((word) => {
        if (format.test(word) && word.length > 4) {
          var fIndex = stateWord.findIndex((element) => element.text === word);
          if (fIndex >= 0) {
            stateWord[fIndex].value = stateWord[fIndex].value + 1;
          } else {
            stateWord.push({ text: word, value: 1 });
          }
        }
      });
      if (tweet.scores.label === 0) {
        negative = negative + 1;
      } else if (tweet.scores.label === 1) {
        neutral = neutral + 1;
      } else {
        positive = positive + 1;
      }
    });
    stateWord.sort(function (a, b) {
      return a.value - b.value;
    });
    this.setState({
      total: negative + neutral + positive,
      negative: negative,
      positive: positive,
      neutral: neutral,
      words: stateWord,
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
        <WordCloud words={this.state.words} />
        <GraphTwo data={this.state.words.slice(1).slice(-10)} />
      </div>
    );
  }
}

export default withRouter(Result);
