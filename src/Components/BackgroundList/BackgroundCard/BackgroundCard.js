import "./BackgroundCard.css";

import { Link } from "react-router-dom";
import React from "react";

const BackgroundCard = ({ background }) => (
  <Link to={`/backgrounds/${background.saga.toLowerCase()}/${background.url_id.toLowerCase()}`}>
    <div className={
      background.special ?
      "background-card inline-block mx-2 my-1 w-48 overflow-hidden border-2 border-yellow rounded-lg"
      :
      "background-card inline-block mx-2 my-1 w-48 overflow-hidden"
    }>
      <img 
        src={require(`../../../images/bgs/small/${background.url_id.toLowerCase()}.bmp`)}
        alt={`pic of ${background.name}`}
        className="w-full"
      />
      <div className="text-center text-sm px-1 py-2">
        <p>{background.name}</p>
      </div>
    </div>    
  </Link>
);

export default BackgroundCard;
