import React from "react";

import './CharacterBio.css'

const CharacterBio = ({ character }) => {  

  const labelStyle = "inline-block rounded-lg py-1 px-3 mr-2 mt-1 mb-1 text-white font-bold text-shadow-label"
  const hrStyle = "border lf2-border-blue my-0";

  const races = character.race.map((race) => (
    <span className={`${labelStyle} ${race.toLowerCase()}-race-label`}> {race} </span>
  ));

  return (
    <div className="border-2 rounded lf2-bg-blue lf2-border-blue px-5 py-5">
      <div className="relative">
        <img src={require(`../../../images/profile/${character.saga.toLowerCase()}_bg.png`)}
          alt={`standing pic of ${character.name}`}
          className="w-full"
        />
      <img src={require(`../../../images/profile/s.png`)}
        alt={`standing pic of ${character.name}`}
        className="w-full absolute pin-t pin-l"
      />
        <img 
          src={require(`../../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.gif`)}
          alt={`standing pic of ${character.name}`}
          className="w-full absolute pin-t pin-l"
        />
      </div>

      <div className="mt-3">
        <h4 className="text-white"> Race </h4> 
        <hr className={hrStyle} />
        <div> {races} </div>
      </div>
      <div className="mt-3">
        <h4 className="text-white"> Saga </h4> 
        <hr className={hrStyle} />
        <span className={`${labelStyle} ${character.saga.toLowerCase()}-saga-label`}> {character.saga} </span>
      </div>      
      
    </div>
  );
}

export default CharacterBio;
