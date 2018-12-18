import React, { Component } from "react";
import CharacterCard from "../CharacterCard";

const CharacterGroup = ({ data: { name, characters } }) => {
  const cards = characters.map(character => {
    return <CharacterCard key={character.id} data={character} />;
  });

  return (
    <div>
      <h3>{name}</h3>
      <div>{cards}</div>
    </div>
  );
};

export default CharacterGroup;
