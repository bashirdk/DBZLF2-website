import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AdComponent from "../../AdComponent/AdComponent";

function Accordion(props) {
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

  function updateListStyle(input) {
    if (input.includes("[+]")) {
      input = input.split("[+]");
      return ( <li className="list-plus" key={input}> {input} </li> )
    }
    else if (input.includes("[-]")) {
      input = input.split("[-]");
      return ( <li className="list-minus" key={input}> {input} </li> )
    }
    else {
      return ( <li key={input}> {input} </li> )
    }
  }

  function outputIfExists(header, data) {
    return (
       data.length > 0 &&
        <>
          <h4 className="my-1"> {header} </h4>
          <ul>
            {data}
          </ul>
        </>
    )
  }

  function mapUpdatesData(propsData) {
    if (propsData) {
      return propsData.map( 
        (updates) => {
          return updateListStyle(updates);
      })
    }
    else {
      return ''
    }
  }

  function downloadsCharBgList(propsData) {
    if (propsData) {
      return propsData.map(
        (char) => {
          return (
            char.new ?
            <li key={char.name}> {char.name} <span className="new"> NEW </span> </li>
            :
            <li key={char.name}> {char.name} </li>
          )
        }
      )
    }
    else {
      return ''
    }
  }

  let characters = mapUpdatesData(props.updates.major_updates.characters);
  let backgrounds = mapUpdatesData(props.updates.major_updates.backgrounds);
  let list_of_major_updates = mapUpdatesData(props.updates.major_updates.list_of_major_updates);
  let levelSystem = mapUpdatesData(props.updates.major_updates.level_system);
  let list_of_minor_updates = mapUpdatesData(props.updates.minor_updates.list_of_minor_updates);
  let character_changes = mapUpdatesData(props.updates.minor_updates.character_changes);
  let sprite_changes = mapUpdatesData(props.updates.minor_updates.sprite_changes);
  let new_moves = mapUpdatesData(props.updates.minor_updates.new_moves);
  let speed_adjustments = mapUpdatesData(props.updates.minor_updates.speed_adjustments);

  let balance_changes = mapUpdatesData(props.updates.major_updates.balance_changes);
  let ai_updates = mapUpdatesData(props.updates.major_updates.ai_updates);
  let stage_mode = mapUpdatesData(props.updates.major_updates.stage_mode);

  // let characterListSaiyan = downloadsCharBgList(props.characterList.saiyan);
  // let characterListNamek = downloadsCharBgList(props.characterList.namek);
  // let characterListAndroid = downloadsCharBgList(props.characterList.android);
  // let characterListBuu = downloadsCharBgList(props.characterList.buu);

  // let backgroundListSaiyan = downloadsCharBgList(props.backgroundList.saiyan);
  // let backgroundListNamek = downloadsCharBgList(props.backgroundList.namek);
  // let backgroundListAndroid = downloadsCharBgList(props.backgroundList.android);
  // let backgroundListBuu = downloadsCharBgList(props.backgroundList.buu);
  // let backgroundListLf2 = downloadsCharBgList(props.backgroundList.lf2);

  let characterListSaiyan;
  let characterListNamek;
  let characterListAndroid;
  let characterListBuu;

  let backgroundListSaiyan;
  let backgroundListNamek;
  let backgroundListAndroid;
  let backgroundListBuu;
  let backgroundListLf2;

  if(!props.dlc) {
    characterListSaiyan = downloadsCharBgList(props.characterList.saiyan);
    characterListNamek = downloadsCharBgList(props.characterList.namek);
    characterListAndroid = downloadsCharBgList(props.characterList.android);
    characterListBuu = downloadsCharBgList(props.characterList.buu);
  
    backgroundListSaiyan = downloadsCharBgList(props.backgroundList.saiyan);
    backgroundListNamek = downloadsCharBgList(props.backgroundList.namek);
    backgroundListAndroid = downloadsCharBgList(props.backgroundList.android);
    backgroundListBuu = downloadsCharBgList(props.backgroundList.buu);
    backgroundListLf2 = downloadsCharBgList(props.backgroundList.lf2);
  }

  return (
    <div className="accordion__section border-2 lf2-border-blue lf2-bg-blue my-5 rounded text-white">

      <button className={`accordion ${setActive} px-6 py-5 text-white`} onClick={toggleAccordion}>        
        <div className="sm:inline-block lg:flex w-full">
          <div className="lg:w-1/3 text-left inline-block float-left">
            <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            { props.dlc 
            ?
             <h2 className="inline-block text-xl"> {props.title} </h2> 
             :
             <h2 className="inline-block"> DBZ LF2 {props.version} </h2> 
            }
          </div>          
          <div className="lg:w-1/3 text-center inline-block">
            <p className="my-2"> {props.date} </p>
          </div>
          <div className="lg:w-1/3 text-center sm:block">
            <p className="mt-2"> 
              Chars: <span className="rounded-lg py-05 px-2 my-2 mr-2 bg-green"> {props.charactersTotal} </span>
              New: <span className="rounded-lg py-05 px-2 my-2 bg-blue"> {props.charactersNew} </span>
            </p>  
          </div>
          <div className="lg:w-1/3 text-center sm:block">
            <p className="mt-2"> 
              BGs: <span className="rounded-lg py-05 px-2 my-2 mr-2 bg-green"> {props.backgroundsTotal} </span>
              New: <span className="rounded-lg py-05 px-2 my-2 bg-blue"> {props.backgroundsNew} </span>
            </p>  
          </div>
        </div>
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`accordion__content ${setActive} lf2-border-blue lf2-bg-blue rounded px-6 mx-5 lg:mx-0 text-white`}
      >      
        <div className="pb-3" >

        { props.dlc ?
        <h3 className="text-center text-2xl">{props.title} - {props.subtitle}</h3>
        : ''
        }
        { props.author ?
        <h3 className="text-center">By {props.author}</h3>
        : ''
        }

          <div className="text-center">



            { props.download ?
             <a href={props.download} target="_blank" rel="noreferrer">
             <button className="download-button">
                <FontAwesomeIcon icon="download" color="white" />
                <span className="mx-2">DOWNLOAD</span>
              </button>
            </a>
             :
             props.download === false ?
             <button className="download-button" disabled>
                <FontAwesomeIcon icon="download" color="white" />
                <span className="mx-2">DOWNLOAD</span>
              </button>
              :
             <a href={"https://github.com/bashirdk/dbz-lf2/releases/download/" + props.version + "/DBZ.LF2." + props.version + ".zip"}>
             <button className="download-button">
                <FontAwesomeIcon icon="download" color="white" />
                <span className="mx-2">DOWNLOAD</span>
              </button>
            </a>}
            {/* <AdComponent /> */}
          </div>

          {!props.dlc ? 
          <>
            <table className="hidden lg:table downloads-lists">
            <thead>
              <tr>
                <th colSpan="4" className="text-lg py-1">Characters</th>
              </tr>
              <tr>
                <th width="25%">Saiyan</th>
                <th width="25%">Namek</th>
                <th width="25%">Android</th>
                <th width="25%">Buu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {characterListSaiyan.length === 0 ? <p className="text-center">N/A</p> : <ol> {characterListSaiyan}</ol>} </td>
                <td> {characterListNamek.length === 0 ? <p className="text-center">N/A</p> : <ol> {characterListNamek}</ol>} </td>
                <td> {characterListAndroid.length === 0 ? <p className="text-center">N/A</p> : <ol> {characterListAndroid}</ol>} </td>
                <td> {characterListBuu.length === 0 ? <p className="text-center">N/A</p> : <ol> {characterListBuu}</ol>} </td>
              </tr>
            </tbody>
          </table>

          <table className="hidden lg:table downloads-lists">
            <thead>
              <tr>
                <th colSpan="5" className="text-lg py-1">Backgrounds</th>
              </tr>
              <tr>
                <th width="20%">Saiyan</th>
                <th width="20%">Namek</th>
                <th width="20%">Android</th>
                <th width="20%">Buu</th>
                <th width="20%">LF2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {backgroundListSaiyan.length === 0 ? <p className="text-center">N/A</p> : <ol> {backgroundListSaiyan}</ol>} </td>
                <td> {backgroundListNamek.length === 0 ? <p className="text-center">N/A</p> : <ol> {backgroundListNamek}</ol>} </td>
                <td> {backgroundListAndroid.length === 0 ? <p className="text-center">N/A</p> : <ol> {backgroundListAndroid}</ol>} </td>
                <td> {backgroundListBuu.length === 0 ? <p className="text-center">N/A</p> : <ol> {backgroundListBuu}</ol>} </td>
                <td> {backgroundListLf2.length === 0 ? <p className="text-center">N/A</p> : <ol> {backgroundListLf2}</ol>} </td>
              </tr>
            </tbody>
          </table>
        </>
        : 
        ''
          }
          

          <h3 className="mb-1">Major Updates</h3>
          <div className="mx-3">
            {outputIfExists("New Characters", characters)}
            {outputIfExists("Backgrounds", backgrounds)}
            {outputIfExists("Level System", levelSystem)}
            {outputIfExists("Balance Changes", balance_changes)}
            {outputIfExists("AI Updates", ai_updates)}
            {outputIfExists("Other Updates", list_of_major_updates)}
            {outputIfExists("Stage Mode Mechanics", stage_mode)}
          </div>
          <br/>
          <h3 className="mb-1">Minor Updates</h3>
          <div className="mx-3">
            {outputIfExists("Character Changes", character_changes)}
            {outputIfExists("Sprite Changes", sprite_changes)}
            {outputIfExists("New Moves", new_moves)}
            {outputIfExists("Speed Adjustments", speed_adjustments)}
            {outputIfExists("Other Updates", list_of_minor_updates)}
          </div>
          <br/>
          <div className="text-center">
            { props.trailer ? 
              <div className="download-trailer">
                <div className="video-responsive">
                  <iframe width="560" height="315" title={"DBZ LF2 " + props.version + " trailer"} src={"https://www.youtube.com/embed/" + props.trailer} frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe> 
                </div>
              </div>
              :
            <div></div> }
          </div>

        </div>
      </div>

    </div>
  );
}

export default Accordion;
