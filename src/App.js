import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Result from "./pages/result";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/analytics">
            <Result />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
