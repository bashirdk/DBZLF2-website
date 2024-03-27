import CharacterCard from "../CharacterCard";
import React from "react";

import './CharacterGroup.css'

const CharacterGroup = ({ data: { name, characters } }) => {
  var cards = characters.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  let totalCharacters = 0;
  let heroes = 0;
  let villains = 0;
  let other = 0;
  var loop = characters.forEach(element => {
    totalCharacters += 1;
    if (element.type) {
      if (element.type.hero) {
        heroes += 1;
      }
      if (element.type.villain) {
        villains += 1;
      }
      if (element.type.other) {
        other += 1;
      }
    }

  });

  if (cards.length === 0)
  {
    cards = <p className="text-white italic">Nothing to see here...</p>
  }

  return (    
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
      <h2 className="text-center text-white mb-5">{name}</h2>
      <div className="text-white">
        {totalCharacters > 0 ? 
        <table className="character-count-table">
          <tr>
            <th>Characters</th>
            <th>Heroes</th>
            <th>Villains</th>
            <th>Other</th>
          </tr>
          <tr>
            <td>{totalCharacters}</td>
            <td>{heroes}</td>
            <td>{villains}</td>
            <td>{other}</td>
          </tr>
        </table>
        : ''}
      </div>
      <div className="text-center lg:text-left">{cards}</div>
    </div>
  );
};

export default CharacterGroup;
