import React from "react";
// import logo from "../../logo.svg";
import logo from "../../leafLogo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Meal Advisor
      </a>
      <Link to="/users/">← Back to Home</Link>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </nav>
  );
}

export default Nav;
