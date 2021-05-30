import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import Looking from "../assets/animation/looking.json";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Player
          ref={this.player} // set the ref to your class instance
          autoplay={true}
          loop={true}
          src={Looking}
          style={{ height: "70vh", width: "auto" }}
        ></Player>
        <h1 style={{ backgroundColor: "yellow", fontWeight: "900" }}>
          Analysing Tweets
        </h1>
      </div>
    );
  }
}

export default Loader;
