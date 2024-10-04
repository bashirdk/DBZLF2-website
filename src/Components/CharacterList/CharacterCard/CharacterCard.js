import "./CharacterCard.css";

import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character, faceSwap }) => (
  <Link to={`/characters/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`}>
    <div className="character-card inline-block mx-1 my-1 w-48 overflow-hidden relative">
      { !faceSwap
      ?
        <>
          <img 
            src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.png`)}
            alt={`face pic of ${character.name}`}
            className="w-full anime-face"
          />
          <img 
            src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
            alt={`face pic of ${character.name}`}
            className="w-full pixel-face"
          />
          <div className="card-text text-center text-sm px-1">
            <p>{character.name}</p>
          </div>  
        </>
          :
        <>
          <img 
            src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.png`)}
            alt={`face pic of ${character.name}`}
            className="w-full pixel-face"
          />
          <img 
            src={require(`../../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.bmp`)}
            alt={`face pic of ${character.name}`}
            className="w-full anime-face pixelated"
          />
          <div className="name-swap name-swap text-center text-sm px-1">
            <p>{character.name}</p>
          </div>  
        </>
    }

    </div>
    
  </Link>
);

export default CharacterCard;
