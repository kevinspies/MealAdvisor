import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Meal Advisor</h2>
            {console.log("new branch test commit")}
          </div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/users/:id" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
