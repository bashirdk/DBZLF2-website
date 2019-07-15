import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

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

  return (
    <div className="accordion__section border-2 lf2-border-blue lf2-bg-blue rounded text-white">
      <button className={`accordion ${setActive} px-6 py-5 text-white`} onClick={toggleAccordion}>       
        
        <div className="flex w-full">

          <div className="w-1/3 text-left inline-block">
            <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            <h2 className="inline-block"> DBZ LF2 {props.title} </h2> 
          </div>
          
        <div className="w-1/3 text-center">
         <p class="my-2"> {props.date} </p>
        </div>

        <div className="w-1/3 text-right">
          <p class="my-2"> 
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
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
