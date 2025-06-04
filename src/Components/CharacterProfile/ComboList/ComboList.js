import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import './ComboList.css'

const ComboList = ({ character }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }
  
  const moveContainerStyle = "border-b lf2-border-blue sm:flex";
  const moveHeaderStyle = "border-b lf2-border-blue px-2 py-3 text-white";

  const comboContainerStyle = "border-b-3 lf2-border-blue block";
  const comboNameStyle = "lf2-bg-blue-dark text-white w-full block md:border-b-0 px-2 pt-3 pb-2 align-middle";
  const comboInputStyle = "w-full text-white block px-2 pt-1 pb-3 align-middle";


  // 99 = basic combo
  const defaultCombos = {
    basic: [{
      name: "Jump Attack", input: "J A", combo_id: 50
    }, {
      name: "Run Attack", input: ">>A", combo_id: 51
    }, {
      name: "Dash Attack", input: ">> JA", combo_id: 52
    }, {
      name: "Basic Combo", input: "Super Punch + J", combo_id: 53
    }, {
      name: "Basic Combo", input: "Super Punch + J A", combo_id: 54
    }
  ]}

  const getCombo = (id, type, moves = character.moves, triedDefault = false) => {
    if (!moves || typeof moves !== 'object') return null;
  
    let move = null;

    // console.log('moves', moves);
  
    Object.keys(moves).forEach(key => {
      moves[key].forEach(element => {
        // console.log('element', element);
        // console.log('element', element.hasOwnProperty(type))
        if (element.combo_id === id ) {
          move = element[type];
        }
      });
    });
  
    if (!move && !triedDefault) {
      // console.log("id", id);
      // console.log("type", type);
      return getCombo(id, type, defaultCombos, true); // now only tries once
    }
  
    return move || null;
  };

  const loopCombo = (array, type, connector) => {
    // console.log('array', array);
    // console.log('type', type);
    // console.log('connector', connector);
    let comboName;

    if (array.constructor === Array) {
      array.forEach((id) => {
        if (comboName) {
          comboName = comboName + connector + getCombo(id, type);
        } else {
          comboName = getCombo(id, type);
        }
      })
      // console.log('combo name', comboName)
      return comboName;
    } else {
      return array[type];
    }
  }

  const comboMoveList = ( input, connector = ' + ') => {
    if (input.length === 0)
    {
      return (
        <div className={moveContainerStyle}>
        <div className="px-2 py-3 text-white"> 
          <i> None Available </i>
        </div>
      </div>  
      )
    } else {
      // console.log('input COMBOMOVE LIST', input);
      const mapMoves = input.map((mappedMove) => {
        // console.log("mappedMove", mappedMove);
        if (mappedMove.ultimate)
        {
          var ultimateMove = (
            <span className="inline-block text-xs rounded px-2 py-1 bg-red-dark font-bold text-white my-0 md:mt-2 lg:my-0">
              ULTIMATE
            </span>
          )
        }
        return(
        <div className={comboContainerStyle}>
          <div className={comboNameStyle}> 
            {loopCombo(mappedMove, 'name', connector)} {ultimateMove}
          </div>
          <div className={comboInputStyle}> 
          {loopCombo(mappedMove, 'input', connector)}
          </div>
        </div> )
      });
      return mapMoves;
    }
  };

  let comboLinks;
  let basicCombos;
  let specialCombos;
  let counterCombos;

  if (character){
    comboLinks = comboMoveList(character.combos.links, ' -> ')
    basicCombos = comboMoveList(character.combos.basic);
    specialCombos = comboMoveList(character.combos.special)
    counterCombos = comboMoveList(character.combos.counter)
  }

  if (character) {
    return (

          <div className="combo_accordion__section combo-accordion border-2 lf2-border-blue lf2-bg-blue-light my-5 rounded text-white">

            <button className={`combo-accordion-button ${setActive} text-white`} onClick={toggleAccordion}>
              <div className="border-b lf2-border-blue text-white p-2">
                <h3 className="inline-block float-left"> COMBO LIST &nbsp; <Chevron className={`${setRotate}`} width={10} fill={"#fff"} /> </h3> 
                <br></br> <br></br> 
                <p className="text-center -mt-3 font-bold">CLICK HERE TO SEE COMBOS</p>
                <p className="text-right"> <i> Commands for facing right </i> </p>
              </div>
            </button>

            <div
              ref={content}
              style={{ maxHeight: `${setHeight}` }}
              className={`combo_accordion__content combo-accordion-content ${setActive} lf2-border-blue lf2-bg-blue mx-0 text-white`}
            >
            
              <h3 className={'bg-grey ' + moveHeaderStyle } > Combo Links </h3> {comboLinks}
              <h3 className={'bg-blue ' + moveHeaderStyle}> Basic Combos </h3> {basicCombos}
              <h3 className={'bg-red ' + moveHeaderStyle}> Special Combos </h3> {specialCombos}
              <h3 className={'bg-green ' + moveHeaderStyle}> Counter Combos </h3> {counterCombos}

            </div>
          </div>
    );
  } else {
    return (
    <div className="combo_accordion__section combo-accordion border-2 lf2-border-blue lf2-bg-blue my-5 px-2 py-2 rounded text-white">

      <h3><i> No Combos Available... </i> </h3>
    </div>
    );
  }
};

export default ComboList;