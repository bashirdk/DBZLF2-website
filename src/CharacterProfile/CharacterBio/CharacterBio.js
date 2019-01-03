import React from "react";

const CharacterBio = ({ character }) => {
  
  return (
    <div className="border px-5 py-5">
      <img 
        src={require(`../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.gif`)}
        alt={`standing pic of ${character.name}`}
        className="w-full"
      />
      <p> Race: <span> {character.race} </span></p>
      <p> Saga: <span> {character.saga} </span></p>
    </div>
  );
}

export default CharacterBio;
