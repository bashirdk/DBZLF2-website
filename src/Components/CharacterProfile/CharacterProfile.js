import React, { Component } from "react";
import Helmet from "react-helmet";

import Characters from "../../data/characters.json";
import MoveList from "./MoveList/MoveList.js";
import ComboList from "./ComboList/ComboList.js";
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
            <link rel="canonical" href={this.state.character.url_id} />
          </Helmet>
          <h1 className="text-white text-center md:text-left">Character Profile</h1>
          <h2 className="text-center text-white">{this.state.character.name}</h2>

          <section className="sm:pr-5 my-5 inline-block align-top w-full sm:w-1/3" id="char-bio-section">
            <CharacterBio character={this.state.character} key={this.state.character.id} />
          </section>

          <section className="inline-block w-full sm:w-2/3 ">
            <section className="my-5">
              <CharacterStats character={this.state.character} key={this.state.character.id} />
            </section>   

            <section className="my-5">
              <MoveList character={this.state.character} key={this.state.character.id}/>
            </section>

            {
              this.state.character && this.state.character.combos ?
              <section className="my-5">
                <ComboList character={this.state.character} key={this.state.character.id}/>
              </section>
              :
              <section className="my-5">
                <ComboList character={false} />
              </section>
            }

            {
            this.state.character.moveset_video ?
              <section className="my-5">
                <div className="border-2 lf2-border-blue lf2-bg-blue rounded p-5">
                  <div className="video-responsive">
                    <iframe title="trailer" width="100%" height="315" src={`https://www.youtube.com/embed/${this.state.character.moveset_video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </section>
            :
            ""
          }
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
