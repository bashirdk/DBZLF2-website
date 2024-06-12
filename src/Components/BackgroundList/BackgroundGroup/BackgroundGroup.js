import BackgroundCard from "../BackgroundCard";
import React from "react";

import './BackgroundGroup.css'

const BackgroundGroup = ({ data: { name, backgrounds } }) => {
  var cards = backgrounds.map((background) => (
    <BackgroundCard key={background.id} background={background} />
  ));

  if (cards.length === 0)
  {
    cards = <p className="text-white italic">Nothing to see here...</p>
  }

  return (    
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-6 py-5 mx-5 lg:mx-0">
      <h2 className="text-center text-white mb-5">{name}</h2>

      <div className="text-center lg:text-left">{cards}</div>
    </div>
  );
};

export default BackgroundGroup;
