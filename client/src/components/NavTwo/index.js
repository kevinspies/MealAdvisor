import React from "react";
import logo from "../../logo.svg";

function NavTwo() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Meal Advisor
      </a>

      <img src={logo} className="App-logo" alt="logo" />
      <a className="navbar-brand" href="/about/" color="black">
        About
      </a>
      <a className="navbar-brand" href="/edit/" color="black">
        EDIT
      </a>
    </nav>
  );
}

export default NavTwo;
