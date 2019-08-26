import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

class EditPage extends Component {
  state = {
    name: "",
    age: "",
    height: "",
    sex: "",
    weight: ""
  };

  updateStats = id => {
    //update body stats
  };

  render() {
    return (
      <div>
        <Nav />
        <h1>edit your body's stats!</h1>
        <Input value={this.state.name} placeholder="name (required)" />
        <Input value={this.state.age} placeholder="age (required)" />
        <Input value={this.state.height} placeholder="height (required)" />
        <Input value={this.state.sex} placeholder="sex (required)" />
        <Input value={this.state.weight} placeholder="weight (required)" />
        <FormBtn>Save Body Stats</FormBtn>
      </div>
    );
  }
}
export default EditPage;
