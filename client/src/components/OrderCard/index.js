import React from "react";
import "./style.css";

function OrderCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src="https://media-cdn.tripadvisor.com/media/photo-s/0f/8d/c3/2b/korean-bowl.jpg"
        />
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default OrderCard;
