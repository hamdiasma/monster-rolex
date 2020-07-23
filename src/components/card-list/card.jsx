import React from "react";
import "./card-list.css";
const Card = ({ monster }) => {
  return (
    <div className="col-lg-3 col-md-4  col-sm-6 col-xs-12  text-center ">
      <div
        className="card   mt-3 mx-auto"
        style={{ width: "200px", height: "300px" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{monster.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
