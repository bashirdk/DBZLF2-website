import React, { Component } from "react";

import Characters from "../data/characters.json";

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
        <h3>{this.state.character.name}</h3>
        <p>{JSON.stringify(this.state.character)}</p>
      </div>
    );
  }
}

export default CharacterProfile;
