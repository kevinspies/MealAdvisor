import React from "react";
import Nav from "../components/NavAbout";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Future() {
  return (
    <div>
      <Nav />
      <Container>
        <h3>
          Possibilities ahead -<br></br> <br></br>
          -Friends<br></br> <br></br> -Success Charts <br></br>
          <br></br> -Mongo
        </h3>
        {/* <img src="chart.png" alt="chart" /> */}
      </Container>
    </div>
  );
}

export default Future;
