import React from "react";
// import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/users/" component={HomePage} />
          <Route exact path="/edit/" component={EditPage} />
          <Route exact path="/about/" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
