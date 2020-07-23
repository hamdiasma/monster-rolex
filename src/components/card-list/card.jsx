import React from "react";
import "./card-list.css";
const Card = ({ monster }) => {
  return (
    <div className="col-3 mt-3">
      <div className="card" style={{ width: "200px" ,height:"300px"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{monster.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
