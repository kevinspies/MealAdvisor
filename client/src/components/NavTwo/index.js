import React from "react";
import logo from "../../leafLogo.png";
import { Link } from "react-router-dom";

function NavTwo() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Meal Advisor
      </a>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <a className="navbar-brand" href="/about/" color="black">
        About
      </a> */}
      <Link to="/future/" className="padding: 50px bg-color:blue">
        Future
      </Link>
      <a className="navbar-brand" href="/edit/" color="black">
        EDIT
      </a>
    </nav>
  );
}

export default NavTwo;
