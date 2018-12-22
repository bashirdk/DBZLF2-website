import CharacterCard from "../CharacterCard";
import React from "react";

const CharacterGroup = ({ data: { name, characters } }) => {
  const cards = characters.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return (
    <div>
      <h3>{name}</h3>
      <div>{cards}</div>
    </div>
  );
};

export default CharacterGroup;
