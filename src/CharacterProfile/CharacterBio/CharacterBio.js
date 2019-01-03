import React from "react";

import './CharacterBio.css'

const CharacterBio = ({ character }) => {  

  const labelStyle = "rounded-lg py-1 px-3 mr-2 bg-black text-white"
  const hrStyle = "border mt-0 mb-3";

  const races = character.race.map((race) => (
    <span className={`${labelStyle} ${race.toLowerCase()}-race-label`}> {race} </span>
  ));

  return (
    <div className="border px-5 py-5">
      <img 
        src={require(`../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.gif`)}
        alt={`standing pic of ${character.name}`}
        className="w-full"
      />   

      <div className="mt-5">
        <h4> Race </h4> 
        <hr className={hrStyle} />
        <div> {races} </div>
      </div>
      <div className="mt-5">
        <h4> Saga </h4> 
        <hr className={hrStyle} />
        <span className={`${labelStyle} ${character.saga.toLowerCase()}-saga-label`}> {character.saga} </span>
      </div>      
      
    </div>
  );
}

export default CharacterBio;
