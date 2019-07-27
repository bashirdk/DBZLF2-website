import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      return ( <li className="list-plus"> {input} </li> )
    }
    else if (input.includes("[-]")) {
      input = input.split("[-]");
      return ( <li className="list-minus"> {input} </li> )
    }
    else {
      return ( <li> {input} </li> )
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


  let characters = mapUpdatesData(props.updates.major_updates.characters);
  let backgrounds = mapUpdatesData(props.updates.major_updates.backgrounds);
  let list_of_major_updates = mapUpdatesData(props.updates.major_updates.list_of_major_updates);
  let levelSystem = mapUpdatesData(props.updates.major_updates.level_system);
  let list_of_minor_updates = mapUpdatesData(props.updates.minor_updates.list_of_minor_updates);

  let sprite_changes = mapUpdatesData(props.updates.minor_updates.sprite_changes);
  let new_moves = mapUpdatesData(props.updates.minor_updates.new_moves);
  let speed_enhancements = mapUpdatesData(props.updates.minor_updates.speed_enhancements);


  return (
    <div className="accordion__section border-2 lf2-border-blue lf2-bg-blue my-5 rounded text-white">
      
      <button className={`accordion ${setActive} px-6 py-5 text-white`} onClick={toggleAccordion}>       
        
        <div className="flex w-full">
          <div className="w-1/3 text-left inline-block">
            <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            <h2 className="inline-block"> DBZ LF2 {props.version} </h2> 
          </div>          
          <div className="w-1/3 text-center">
          <p class="my-1"> {props.date} </p>
          </div>
          <div className="w-1/3 text-right">
            <p class="my-1"> 
              Characters: <span class="rounded-lg py-05 px-2 my-2 mr-2 bg-green"> {props.charactersTotal} </span>
              New: <span class="rounded-lg py-05 px-2 my-2 bg-blue"> {props.charactersNew} </span>
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

          <div className="text-center">
            <a href={"https://github.com/bashirdk/dbz-lf2/releases/download/" + props.version + "/DBZ.LF2." + props.version + ".zip"}>
              <button class="download-button">
                <FontAwesomeIcon icon="download" color="white" />
                <span class="mx-2">DOWNLOAD</span>
              </button>
            </a>
          </div>

          <h3 className="mb-1">Major Updates</h3>
          <div className="mx-3">
            {outputIfExists("New Characters", characters)}
            {outputIfExists("Backgrounds", backgrounds)}
            {outputIfExists("Level System", levelSystem)}
            {outputIfExists("Other Updates", list_of_major_updates)}                  
          </div>
          <br/>
          <h3 className="mb-1">Minor Updates</h3>
          <div className="mx-3">
            {outputIfExists("Sprite Changes", sprite_changes)}
            {outputIfExists("New Moves", new_moves)}
            {outputIfExists("Speed Enhancements", speed_enhancements)}
            {outputIfExists("Other Updates", list_of_minor_updates)}
          </div>     
          <br/>
          <div class="text-center">
            { props.trailer ? 
              <div class="download-trailer">
                <div class="video-responsive">
                  <iframe width="560" height="315" title={"DBZ LF2 " + props.version + " trailer"} src={"https://www.youtube.com/embed/" + props.trailer} frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
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
