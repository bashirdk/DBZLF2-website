import "./CharacterCard.css";

import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character }) => (
  <Link to={`/characters/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`}>
    <div className="character-card inline-block border mx-1 my-1 w-48 rounded overflow-hidden">
      <img 
        src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.png`)}
        alt={`face pic of ${character.name}`}
        className="w-full"
      />
      <div className="text-center text-sm px-1 py-2">
        <p>{character.name}</p>
      </div>      
    </div>
    
  </Link>
);

export default CharacterCard;
