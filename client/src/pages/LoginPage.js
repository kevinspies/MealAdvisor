import React, { Component } from "react";
import API from "../utils/API";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      //   API.loginUser
      //if they already exists, createNewUser
    }
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>

          <label>
            Password:
            <input type="text" name="name" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
