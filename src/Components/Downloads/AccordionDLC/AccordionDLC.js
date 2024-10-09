import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./AccordionDLC.css";

import Accordion from "../Accordion/Accordion"

import DLCDownloadsJSON from "../../../data/dlcDownloads.json";

function AccordionDLC(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `3000px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  
  // var dlcDownloadsData = DLCDownloadsJSON.map((download) => (
  //   <div className="downloads-section"  key={download.version}>
  //     <Accordion
  //       version={download.version}
  //       date={download.date}
  //       download={download.download}
  //       charactersTotal={download.characters.total}
  //       charactersNew={download.characters.new}
  //       backgroundsTotal={download.backgrounds.total}
  //       backgroundsNew={download.backgrounds.new}
  //       trailer={download.trailer}
  //       updates={download.updates}
  //       dlc={download.dlc}
  //     />
  //   </div>
  // ));

  var dlcDownloads = Object.groupBy(DLCDownloadsJSON, ({ version }) => version);
    var dlcDownloadsData;

    let allDownloads = [];
    for (const [key] of Object.entries(dlcDownloads)) {
      var versionGroup = <h2> {key} </h2>;
      allDownloads.push(versionGroup);

      dlcDownloadsData = DLCDownloadsJSON.map((download) => {
        return download.version === key ?
        <div className="downloads-section"  key={download.version}>
          <Accordion
            version={download.version}
            title={download.title}
            subtitle={download.subtitle}
            date={download.date}
            download={download.download}
            charactersTotal={download.characters.total}
            charactersNew={download.characters.new}
            backgroundsTotal={download.backgrounds.total}
            backgroundsNew={download.backgrounds.new}
            trailer={download.trailer}
            updates={download.updates}
            dlc={download.dlc}
          />
        </div>
        : ''
      });
      allDownloads.push(dlcDownloadsData);
    }



  return (
    <div className="accordion__section border-2 lf2-border-blue lf2-bg-blue my-5 rounded text-white">

      <button className={`accordion ${setActive} px-6 py-5 text-white`} onClick={toggleAccordion}>
        <div className="w-full">
          <div className="text-left inline-block">
            <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            <h2 className="inline-block text-center float-center"> DOWNLOADABLE CONTENT </h2> 
          </div>
        </div>
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`accordion__content ${setActive} lf2-border-blue lf2-bg-blue rounded px-6 mx-5 lg:mx-0 text-white`}
      >
        <div className="pb-3" >

          {allDownloads}
      </div>

    </div>
    </div>
  );
}

export default AccordionDLC;
