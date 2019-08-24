import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryPoint from "./components/pages/EntryPoint";
import About from "./components/pages/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <EntryPoint />} />
        </Switch>
        <Route
          exact
          path="/about"
          render={props => (
            <div>
              <About />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
