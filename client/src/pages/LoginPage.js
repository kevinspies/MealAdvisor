import React, { Component } from "react";
import API from "../utils/API";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  // login = (id) => {
  //   API.getUser(id)
  //   .then(res =>
  //     this.setState), set the app's state?
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.createUser({
        username: this.state.username,
        password: this.state.password
      });
      // .then(res=>)
      //in this promise, i want to render the home page
      //so this class needs a function to do that
      //am i to use inheritance here to call
      //something in app?
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
