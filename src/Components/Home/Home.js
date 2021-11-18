import "./Home.css";

import React from "react";
import Helmet from "react-helmet";

import DragonBall from "../Logo/DragonBall";

const Home = () => (
  <div>  
    <Helmet>
      <title> Dragon Ball Z Little Fighter 2</title>
      <meta name="description" content={"All about the Dragon Ball Z modficiation of the game Little Fighter 2."} />
    </Helmet>
    <h1 className="text-white">DBZ LF2</h1>

    <DragonBall
      strokeWidth="1"
      width="100%"
    />

    <div className="relative mb-10">
      <img 
        src={require('../../images/dbzlf2-logo-horizontal.png')}
        className="hidden sm:block"
        alt="dbz lf2 logo for larger screens"
      />
      <img 
        src={require('../../images/dbzlf2-logo.png')}
        className="block sm:hidden"
        alt="dbz lf2 logo for smaller screens"
      />
      <p className="version-label text-white text-right -mt-5 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.2.9 </p>
    </div>

    <div className="text-center">
      <a href="https://forms.gle/6F2H4csmaGsn2ejX8" target="_blank"> 
        <button className="download-button">
          POLL: Which Character should I work on next? 
        </button>
      </a>
    </div>
    
    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/qr8AJyuS-VY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;
