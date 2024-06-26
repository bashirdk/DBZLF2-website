import React from "react";
import { Link, useLocation } from "react-router-dom";

import './CharacterBio.css'

import Characters from "../../../data/characters.json";

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

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  React.useEffect(() => {
    console.log("getCookie('previousUrl')", getCookie('previousUrl'));
    console.log("window.location.href", window.location.pathname);
    if (getCookie('previousUrl') !== window.location.pathname) {
      const aura = document.getElementById('ss-aura-flash');
      if (getCookie('previousUrl') === '/characters') {

      } else {
        aura.classList.add('bio-ss-aura');
        aura.classList.add('bio-ss-aura-flash');
      }
      
      document.cookie = `previousUrl=${window.location.pathname}`;
    }

    window.onscroll = function() {stickyScroll()};

    var header = document.getElementById("char-bio-section");
    var sticky = 84;

    function stickyScroll() {
      // console.log('window.pageYOffset', window.pageYOffset);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky-bio");
      } else {
        header.classList.remove("sticky-bio");
      }
    }
  }, [])

  const powerLevelContainer = (statName, stat) => (
    <div className="flex scouter-full-container">
    <div className="scouter-model-back">
      <div className="block w-24 px-1 py-3 ml-3 text-right scouter-model">
        <p>{statName}</p>
      </div>
    </div>
      <div className="scouter-container">
      <div className="w-full block py-2 mr-6 sm:pr-8 flex-auto text-4xl power-level-value">
        {/* {
          character.stats.power_level ?
          character.stats.power_level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          :
          Math.round(stat.attack * stat.defense * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } */} <br></br>
        <p>FIGHT</p>
      </div>
      </div>
    </div>
  )

  const location = useLocation();
  let startingPowerLevel = 0;
  let startingStatBarPosition = 0;
  let startingBarPositionAttack = 0;
  let startingBarPositionDefense= 0;
  let startingBarPositionSpeed = 0;
  let startingBarPositionKi = 0;
  if (location.state) {
    const {changeCharacterStats} = location.state;
    startingPowerLevel = changeCharacterStats.power_level;
    startingStatBarPosition = `${(changeCharacterStats.attack / character.stats.attack) * 100}%`

    startingBarPositionAttack = `${(changeCharacterStats.attack / character.stats.attack) * 100}%`
    startingBarPositionDefense = `${(changeCharacterStats.defense / character.stats.defense) * 100}%`
    startingBarPositionSpeed = `${(changeCharacterStats.speed / character.stats.speed) * 100}%`
    startingBarPositionKi = `${(changeCharacterStats.ki / character.stats.ki) * 100}%`
  } 

  const pl_digits = character.stats.power_level.toString().length;
  document.documentElement.style.setProperty('--power-level-padding', `-${pl_digits * 2 + (pl_digits/2 * 10)}px`)
  document.documentElement.style.setProperty('--power-level-anim-time', `${pl_digits/2}s`); // time of animation = number of digits of power level / 2
  document.documentElement.style.setProperty('--power-level-start-value', startingPowerLevel);
  document.documentElement.style.setProperty('--power-level-value', character.stats.power_level); // set the css content value of power level to character power level

  document.documentElement.style.setProperty('--startingBarPosition', startingStatBarPosition);
  document.documentElement.style.setProperty('--startingBarPositionAttack', startingBarPositionAttack);
  document.documentElement.style.setProperty('--startingBarPositionDefense', startingBarPositionDefense);
  document.documentElement.style.setProperty('--startingBarPositionSpeed', startingBarPositionSpeed);
  document.documentElement.style.setProperty('--startingBarPositionKi', startingBarPositionKi);

  const powerLevelStat = powerLevelContainer("Power Level", character.stats);

  const changeCharacterStats = {
    power_level: character.stats.power_level,
    attack: character.stats.attack,
    defense: character.stats.defense,
    speed: character.stats.speed,
    ki: character.stats.ki
  }

  let powerups = [];
  let powerdowns = [];
  character.moves.transformations.forEach(transformation => {
    if (transformation.direction === 1) {
      powerups.push(transformation);
    }
    if (transformation.direction === 0) {
      powerdowns.push(transformation);
    }
  });


  console.log('powerups', powerups);
  console.log(character.moves.transformations);

  const getPath = (transformation) => {
    console.log('getPath power up', transformation.id);
    const newChar = Characters.find( (character) => (
      character.id === transformation.id
    ));
    return newChar ? `/characters/${newChar.saga.toLowerCase()}/${newChar.url_id.toLowerCase()}` : '';
  }
  
  return (
    <div className="border-2 rounded lf2-bg-blue lf2-border-blue px-5 py-5">
      <div className="relative">
      {powerLevelStat}
        <img src={require(`../../../images/profile/${character.saga.toLowerCase()}_bg.png`)}
          alt={`background for ${character.saga.toLowerCase()} saga`}
          className="w-full"
        />
        <img src={require(`../../../images/profile/superauraflash.png`)}
          alt={`background for ${character.saga.toLowerCase()} saga`}
          className={`w-full`}
          id="ss-aura-flash"
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

        { powerups.map((power) => (
       <Link to={{ pathname: getPath(power), state: { changeCharacterStats } }} className={`bio-power-up power-up-${power.type}`} title={`Power up to ${power.name}`}> ▲ </Link>
         ))
        }        
        { powerdowns.map((power) => (
          <Link to={{ pathname: getPath(power), state: { changeCharacterStats } }} className={`bio-power-down power-down-${power.type}`} title={`Power down to ${power.name}`}> ▼ </Link>
            ))
           }
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
