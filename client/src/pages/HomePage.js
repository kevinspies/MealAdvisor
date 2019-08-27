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
      "rice:320",
      "spicy chicken:330",
      "bean sprouts:140",
      "cabbage:50",
      "daikon:35",
      "romaine lettuce:10",
      "kale:25",
      "sriracha:20"
    ],
    order2: [
      "noodles:300",
      "tofu:200",
      "bean sprouts:140",
      "potatoes:60",
      "daikon:35",
      "cheese:60",
      "kale:25",
      "sriracha:20",
      "carrots:15"
    ],
    test: "testing",
    listItems: [],
    listItems2: []
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
  handleSubmit2 = event => {
    console.log(event);
    console.log(addBase());
    // this.setState({ test: "hello", order: addBase() });
    this.setState({ test: "hello" });

    this.state.listItems2 = this.state.order2.map(ingredient => (
      <li>{ingredient}</li>
    ));
  };

  render() {
    return (
      //la la la
      <Container fluid>
        <NavTwo />
        <Row>
          {/* <Col> */}
          <Jumbotron>
            "Persistance persistance persistance. YOUR DAILY GOAL: 1900
            calories"
          </Jumbotron>
          {/* </Col> */}
          {/* <Col>Daily Goal: 1900 calories</Col> */}
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            {/* Generate Brunch */}
            {/* <MealButton onClick={this.handleSubmit} /> */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Generate Brunch
            </button>
          </Col>
          {/* <Col size="md-6 md-offset-1">Your Dinner:</Col> */}
          <Col size="md-6 md-offset-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit2}
            >
              Generate Dinner
            </button>
          </Col>
        </Row>
        <Row>
          {/* <Col size="md-6">{this.state.test}</Col> */}
          <Col size="md-6">
            <ul>{this.state.listItems}</ul>
          </Col>
          <Col size="md-6">{this.state.listItems2}</Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
