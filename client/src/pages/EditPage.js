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
}
export default EditPage;
