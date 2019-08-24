import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

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
      //la la la
      <h1>edit your body's stats!</h1>
    );
  }
}
export default EditPage;
