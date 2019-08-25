import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavTwo from "../components/NavTwo";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    //blah
  };

  loadUser = id => {
    //load users name, weight
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
          <Col size="md-6 md-offset-1">Your Brunch:</Col>
          <Col size="md-6 md-offset-1">Your Dinner:</Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
