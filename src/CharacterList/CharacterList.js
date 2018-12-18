import React, { Component } from "react";
import "./CharacterList.css";
import Data from "../data/characters.json";
import CharacterGroup from "./CharacterGroup";

const sagas = ["Saiyan", "Namek", "Android", "Buu"];
const sagaGroups = sagas.map(saga => {
  const data = {
    name: `${saga} Saga`,
    characters: Data.filter(character => character.saga === saga)
  };

  return <CharacterGroup key={saga} data={data} />;
});

const CharacterList = () => (
  <div>
    <h2>Character List</h2>
    <div>{sagaGroups}</div>
  </div>
);

export default CharacterList;
