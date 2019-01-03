import React from "react";

const CharacterBio = ({ character }) => {
  
  return (
    <div>
      <img 
        src={require(`../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.gif`)}
        alt={`standing pic of ${character.name}`}
      />
    </div>
  );
}

export default CharacterBio;
