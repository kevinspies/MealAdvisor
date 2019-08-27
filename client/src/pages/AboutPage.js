import React from "react";
import Nav from "../components/NavAbout";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function About() {
  return (
    <div>
      <Nav />
      <Container>
        <h3>
          -This app aims to help my daily routine and to stay healthy.<br></br>{" "}
          <br></br> -Calculates your BMI, and gives you the recommended number
          of calories you'll need to intake to maintain your current weight.{" "}
          <br></br> <br></br>It then allows you to roll new meals that adhere to
          that calorie requirement, a brunch and a dinner, each will be about
          half your daily need. You'll get new meals each time, so no boring
          repetition here (such a bright future ahead!)<br></br> <br></br>-It
          will also let you confirm that a meal is completed, and you'll then be
          told by when you should finish your next meal to keep on a certain
          diet plan.
        </h3>
      </Container>
    </div>
  );
}

export default About;
