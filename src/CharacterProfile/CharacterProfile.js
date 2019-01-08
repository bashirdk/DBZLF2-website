import React, { Component } from "react";

import Characters from "../data/characters.json";
import MoveList from "./MoveList/MoveList.js";
import CharacterBio from "./CharacterBio/CharacterBio.js";
import CharacterStats from "./CharacterStats/CharacterStats.js";

class CharacterProfile extends Component {
  constructor(props) {
    super(props);

    const { saga, name } = props.match.params;

    this.state = {
      character: Characters.find(
        (character) =>
          character.saga.toLowerCase() === saga.toLowerCase() &&
          character.url_id.toLowerCase() === name.toLowerCase()
      ),
    };
  }

  render() {
    return (
      <div>
        <h2>Character Profile</h2>
        <h3 className="text-center">{this.state.character.name}</h3>
        <section className="sm:pr-5 my-5 inline-block align-top w-full sm:w-1/3">
          <CharacterBio character={this.state.character} />
        </section>
        <section className="my-5  inline-block w-full sm:w-2/3 ">
          <section>
            <CharacterStats character={this.state.character} />
          </section>
          <section>
            <MoveList character={this.state.character} />
          </section>          
        </section>
      </div>
    );
  }
}

export default CharacterProfile;
