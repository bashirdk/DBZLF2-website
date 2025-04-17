import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";

import Characters from "../../data/characters.json";
import CharactersDLC from "../../data/dlcCharacters.json";
import MoveList from "./MoveList/MoveList.js";
import ComboList from "./ComboList/ComboList.js";
import CharacterBio from "./CharacterBio/CharacterBio.js";
import CharacterStats from "./CharacterStats/CharacterStats.js";
import AdComponent from "../AdComponent/AdComponent.js";

const CharacterProfile = ( props ) => {


  const [selCharacter, setCharacter] = useState();
  const { saga, name, subsaga } = props.match.params;

  React.useEffect(() => {
    if(subsaga) {
      setCharacter(CharactersDLC.find(
        (character) =>
          character.saga.toLowerCase() === saga.toLowerCase() &&
          character.subsaga.toLowerCase() === subsaga.toLowerCase() &&
          character.url_id.toLowerCase() === name.toLowerCase()
      ));
    } else {
      setCharacter(Characters.find(
        (character) =>
          character.saga.toLowerCase() === saga.toLowerCase() &&
          character.url_id.toLowerCase() === name.toLowerCase()
      ));
    }
  }, [name, saga, subsaga])


  if (selCharacter)
  {
    return (
      <div>
        <Helmet>
          <title>{selCharacter.name} - Dragon Ball Z Little Fighter 2</title>
          <meta name="description" content={"Character profile page of " + selCharacter.name + ": stats and moves. "} />
          <link rel="canonical" href={selCharacter.url_id} />
        </Helmet>
        <h1 className="text-white text-center md:text-left">Character Profile</h1>

        <section className="mt-5">
          <div className="border-2 lf2-border-blue-light lf2-bg-blue-dark rounded p-3 pb-2 text-white relative char-profile-pixel">
          <div className="char-profile-pixel-img">
            <img 
              src={require(`../../images/face/${selCharacter.saga.toLowerCase()}${selCharacter.subsaga ? "/" + selCharacter.subsaga.toLowerCase() : ''}/${selCharacter.url_id.toLowerCase()}.bmp`)}
              alt={`face pic of ${selCharacter.name}`}
              className=""
            />
          </div>
          <div className="char-profile-pixel-header">
            <h2>{selCharacter.name}</h2>
          </div>
          <div className="char-profile-anime-img">
            <img 
              src={require(`../../images/face/${selCharacter.saga.toLowerCase()}${selCharacter.subsaga ? "/" + selCharacter.subsaga.toLowerCase() : ''}/${selCharacter.url_id.toLowerCase()}.png`)}
              alt={`face pic of ${selCharacter.name}`}
              className=""
            />
          </div>
          </div>
        </section>

        <section className="sm:pr-5 my-5 inline-block align-top w-full sm:w-1/3" id="char-bio-section">
          <CharacterBio character={selCharacter} key={selCharacter.id} />
        </section>

        <section className="inline-block w-full sm:w-2/3 relative">
          <section className="my-5 relative">
            <CharacterStats character={selCharacter} key={selCharacter.id} />
          </section>

          <section className="my-5">
            <MoveList character={selCharacter} key={selCharacter.id}/>
          </section>

          {
            selCharacter && selCharacter.combos ?
            <section className="my-5">
              <ComboList character={selCharacter} key={selCharacter.id}/>
            </section>
            :
            <section className="my-5">
              <ComboList character={false} />
            </section>
          }

          <div className="text-white text-center">
          <p>Below is an ad. Please whitelist our website on your adblocker to help support us.</p>
          <AdComponent />
          <p>Above is an ad. Please whitelist our website on your adblocker to help support us.</p>
          </div>

          {
          selCharacter.moveset_video ?
            <section className="my-5">
              <div className="border-2 lf2-border-blue lf2-bg-blue rounded p-5">
                <div className="video-responsive">
                  <iframe title="trailer" width="100%" height="315" src={`https://www.youtube.com/embed/${selCharacter.moveset_video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
};

export default withRouter(CharacterProfile);
