import "./Home.css";

import React from "react";
import Helmet from "react-helmet";

import DragonBall from "../Logo/DragonBall";
import LittleFighter2 from "../Logo/LittleFighter2";

import { motion } from 'framer-motion'

const versionVariants = {
  initial: {
    opacity: 0,
    y: -50,
  }, 
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 1,
      ease: "easeInOut"
    }
  }
  
}

const Home = () => (
  <div>  
    <Helmet>
      <title> Dragon Ball Z Little Fighter 2</title>
      <meta name="description" content={"All about the Dragon Ball Z modficiation of the game Little Fighter 2."} />
    </Helmet>
    <h1 className="text-white hidden">DBZ LF2</h1>

    <DragonBall
      strokeWidth="1"
      width={window.innerWidth > 960 ? "40%" : "100%"}
      style={ window.innerWidth > 960
        ? 
        {marginBottom: -100 + 'px', marginTop: -100 + 'px' } 
        :
        {marginBottom: -250 + 'px', marginTop: -150 + 'px' }
      }
    />
    <LittleFighter2
      strokeWidth="5"
      width={window.innerWidth > 960 ? "60%" : "100%"}
      style={ window.innerWidth > 960
        ? 
        {marginBottom: -100 + 'px', marginTop: -100 + 'px' } 
        :
        {marginBottom: -100 + 'px', marginTop: -30 + 'px' }
      }
    />

    <motion.div className="relative mb-10"
      initial="initial"
      animate="animate"
      variants={versionVariants}
    >
      <p variants={versionVariants} className="version-label text-white text-right -mt-16 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.2.9 </p>
    </motion.div>

    <div className="text-center">
      <a href="https://forms.gle/6F2H4csmaGsn2ejX8" target="_blank" rel="noopener noreferrer"> 
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
