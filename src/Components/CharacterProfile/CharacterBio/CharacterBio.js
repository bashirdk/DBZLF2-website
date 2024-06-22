import React from "react";

import './CharacterBio.css'

const CharacterBio = ({ character }) => {  

  const labelStyle = "inline-block rounded-lg py-1 px-3 mr-2 mt-1 mb-1 text-white font-bold text-shadow-label"
  const hrStyle = "border lf2-border-blue my-0";

  const races = character.race.map((race) => (
    <span className={`${labelStyle} ${race.toLowerCase()}-race-label`}> {race} </span>
  ));

  const hasBattleDamage = () => {
    try {
      return (
      <img 
        src={require(`../../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}-damage.gif`)}
        alt={`standing pic of ${character.name}`}
        className="w-full absolute pin-t pin-l hidden"
        id="character_standing_damage"
      /> )
    } catch(err) {
      return false;
    }
  }

  const swapDamage = () => {
    const char = document.querySelector('#character_standing');
    const charDamage = document.querySelector('#character_standing_damage');
    const buttonDamage = document.querySelector('#btn_battle_damage');

    if (char && char.classList && char.classList.contains('hidden')) {
      buttonDamage.innerHTML = 'View Battle Damage Outfit';
      char.classList.add('block');
      char.classList.remove('hidden');
      charDamage.classList.add('hidden');
      charDamage.classList.remove('block');
    } else {
      buttonDamage.innerHTML = 'View Normal Outfit';
      char.classList.add('hidden');
      char.classList.remove('block');
      charDamage.classList.add('block');
      charDamage.classList.remove('hidden');
    }
  }

  window.onscroll = function() {myFunction()};

  var header = document.getElementById("char-bio-section");
  var sticky = 84;

  console.log('header', header)
  console.log('sticky', sticky);

  function myFunction() {
    // console.log('window.pageYOffset', window.pageYOffset);
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-bio");
    } else {
      header.classList.remove("sticky-bio");
    }
  }

  return (
    <div className="border-2 rounded lf2-bg-blue lf2-border-blue px-5 py-5">
      <div className="relative">
        <img src={require(`../../../images/profile/${character.saga.toLowerCase()}_bg.png`)}
          alt={`background for ${character.saga.toLowerCase()} saga`}
          className="w-full"
        />
        <img src={require(`../../../images/profile/s.png`)}
          alt={`shadow`}
          className="w-full absolute pin-t pin-l"
        />
        <img 
          src={require(`../../../images/profile/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.gif`)}
          alt={`${character.name} standing`}
          className="w-full absolute pin-t pin-l block"
          id="character_standing"
        />
        { hasBattleDamage() }
      </div>

     <div>
       { hasBattleDamage() ? 
        <p class="text-white text-center"><button onClick={swapDamage} class="text-white" id="btn_battle_damage">View Battle Damage Outfit</button></p>
        : ""}
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
      <div className="mt-3">
        <h4 className="text-white"> First Appearance </h4> 
        <hr className={hrStyle} />
        <span className={`${labelStyle} release-label`}> {character.release} </span>
      </div>
      
    </div>
  );
}

export default CharacterBio;
