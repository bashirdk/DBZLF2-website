import React, { Component } from "react";
import Helmet from "react-helmet";

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
    if (this.state.character)
    {    
      return (
        <div>
          <Helmet>
            <title>{this.state.character.name} - Dragon Ball Z Little Fighter 2</title>
            <meta name="description" content={"Character profile page of " + this.state.character.name + ": stats and moves. "} />
          </Helmet>
          <h1 className="text-white text-center md:text-left">Character Profile</h1>
          <h2 className="text-center text-white">{this.state.character.name}</h2>
          <section className="sm:pr-5 my-5 inline-block align-top w-full sm:w-1/3">
            <CharacterBio character={this.state.character} key={this.state.character.id} />
          </section>
          <section className="inline-block w-full sm:w-2/3 ">
            <section className="my-5">
              <CharacterStats character={this.state.character} key={this.state.character.id} />
            </section>
            <section className="my-5">
              <MoveList character={this.state.character} key={this.state.character.id}/>
            </section>          
          </section>
        </div>
      );
    }
    else {
      return (
        <div>
          <Helmet>
            <title> Character not found - Dragon Ball Z Little Fighter 2</title>
          </Helmet>
          <h1 className="text-white text-center my-24">Character not found.</h1>
        </div>        
      )
    }    
  }
}

export default CharacterProfile;
