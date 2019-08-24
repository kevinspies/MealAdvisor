import React from "react";
// import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/users/:id" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
