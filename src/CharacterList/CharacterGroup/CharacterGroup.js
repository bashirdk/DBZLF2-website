import CharacterCard from "../CharacterCard";
import React from "react";

const CharacterGroup = ({ data: { name, characters } }) => {
  var cards = characters.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  if (cards.length === 0)
  {
    cards = <p className="text-white italic">Nothing to see here...</p>
  }

  return (
    <div>
      <h2 className="text-center text-white mb-5">{name}</h2>
      <div className="text-center lg:text-left">{cards}</div>
    </div>
  );
};

export default CharacterGroup;
