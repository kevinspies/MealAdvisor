import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import "./style.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  // login = (id) => {
  //   API.getUser(id)
  //   .then(res =>
  //
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
      <Container fluid>
        <Nav />

        <Row className="myForm">
          <Col size="md-6" className="myForm">
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
            />
            <Link to={"/users/"}>
              <input type="submit" value="Submit" />
            </Link>
          </Col>
          <Col size="md-2">
            <Link to="/about/" className="padding: 50px bg-color:blue">
              About this App
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
