import React from "react";
import logo from "../../logo.svg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Meal Advisor
      </a>
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
  );
}

export default Nav;
