import React, { Component } from "react";

import Characters from "../data/characters.json";
import MoveList from "./MoveList/MoveList.js";
import CharacterBio from "./CharacterBio/CharacterBio.js";

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
        <section>
          <CharacterBio character={this.state.character} />
        </section>
        <section>
          <MoveList character={this.state.character} />
        </section>
      </div>
    );
  }
}

export default CharacterProfile;
