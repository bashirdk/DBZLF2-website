import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character }) => (
  <Link to={`/characters/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`}>
    {character.name}
  </Link>
);

export default CharacterCard;
