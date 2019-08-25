import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavTwo from "../components/NavTwo";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    remainingCalories: 1900
  };

  loadUser = id => {
    //load users name, weight
    //on page load
  };

  //takes in the remaining number of calories needed for that day
  generateBibibopMeal = function(calories) {
    //i want this to return a json object representing one potential meal off the menu
    //i can just define the bibi menu right here to start out
    //rought plan, select one base, see where i'm at, one protein, see where i'm at, one topping, see where I'm at, (check) one dressing, check, then
    //one more topping, check, one more topping, check, and then start randomizing betwwen more toppings and sides, something like this
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
            Your Brunch:{this.generateBibibopMeal}
          </Col>
          <Col size="md-6 md-offset-1">Your Dinner:</Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
