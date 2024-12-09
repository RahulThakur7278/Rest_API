import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.profilePhoto} alt="Profile"></img>
      <h2>{props.name}</h2>
      <h4>
        {props.city}, {props.age}
      </h4>
      <h5>{props.profession}</h5>
      <button>Add Friend</button>
    </div>
  );
};

export default Card;
