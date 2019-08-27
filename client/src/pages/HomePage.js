import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavTwo from "../components/NavTwo";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import MealButton from "../components/MealButton";
import { addBase } from "../components/BibibopGenerator";

class HomePage extends Component {
  state = {
    calories: "",
    order: [
      "rice",
      "spicy chicken",
      "bean sprouts",
      "cabbage",
      "daikon",
      "romaine lettuce",
      "kale",
      "sriracha"
    ],
    test: "testing",
    listItems: []
  };

  loadUser = id => {
    //load users name, weight
    //on page load
  };

  handleSubmit = event => {
    console.log(event);
    console.log(addBase());
    // this.setState({ test: "hello", order: addBase() });
    this.setState({ test: "hello" });

    this.state.listItems = this.state.order.map(ingredient => (
      <li>{ingredient}</li>
    ));
  };

  render() {
    return (
      //la la la
      <Container fluid>
        <NavTwo />
        <Row>
          <Jumbotron>You Got This!</Jumbotron>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            Generate Brunch
            {/* <MealButton onClick={this.handleSubmit} /> */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Primary
            </button>
          </Col>
          <Col size="md-6 md-offset-1">Your Dinner:</Col>
        </Row>
        <Row>
          {/* <Col size="md-6">{this.state.test}</Col> */}
          <Col size="md-6">
            <ul>{this.state.listItems}</ul>
          </Col>
          <Col size="md-6">meal 2</Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
