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


  return (
    <div className="accordion__section accordion-faqs border-2 lf2-border-blue lf2-bg-blue my-5 rounded text-white">

      <button className={`accordion ${setActive} px-6 py-5 text-white`} onClick={toggleAccordion}>        
        <div className="flex w-full">
          <div className="text-left inline-block">
            <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            <h3 className="inline-block"> {props.question} </h3> 
          </div>
        </div>
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`accordion__content accordion-faqs-content ${setActive} lf2-border-blue lf2-bg-blue rounded px-6 mx-5 lg:mx-0 text-white`}
      >
        <div className="pb-3" >

          <div dangerouslySetInnerHTML={{ __html: props.answer }}>
          </div>
      </div>

    </div>
    </div>
  );
}

export default Accordion;
