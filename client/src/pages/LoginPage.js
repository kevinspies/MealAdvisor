import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
