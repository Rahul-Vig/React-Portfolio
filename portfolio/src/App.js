import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryPoint from "./components/pages/EntryPoint";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <EntryPoint />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
