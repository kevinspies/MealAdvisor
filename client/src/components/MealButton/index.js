import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MealBtn(props) {
  return (
    <button type="button" className="btn btn-primary">
      Generate Meal
    </button>
  );
}

export default MealBtn;
