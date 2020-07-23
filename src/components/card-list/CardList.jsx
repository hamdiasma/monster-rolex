import React from "react";
import Card from "./card";

const CardList = ({ monstsers }) => {
  return (
    <div className="container">
      <div className="row">
        {monstsers.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
