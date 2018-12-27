import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character }) => (
  <Link to={`/characters/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`}>
    <div>
      <img 
        src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.png`)}
        alt={`face pic of ${character.name}`}
      />
      {character.name}
    </div>
    
  </Link>
);

export default CharacterCard;
