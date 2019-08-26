import React from "react";
import Nav from "../components/NavAbout";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Nav />

      <h3>
        This is an app I made to health my daily routine and to stay healthy. It
        assumes a moderate to active lifestyle, calculates your BMI behind the
        scenes once you've inputted your body statistics, and gives you the
        recommended number of calories you'll need to intake to maintain your
        current weight. It then allows you to roll new meals that adhere to that
        calorie requirement, a brunch and a dinner, each will be about half your
        daily need. You'll get new meals each time. It will also let you confirm
        that a meal is completed, and you'll then be told by when you should
        finish your next meal, because, erm, well, I'm on one of those crazy
        fasting diets and I have to eat both my meals withing 8 hours of each
        other! Give it a shot!
      </h3>
    </div>
  );
}

export default About;
