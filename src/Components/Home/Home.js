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
      <link rel="canonical" href="https://dbzlf2.com/" />
    </Helmet>
    <h1 className="text-white hidden">DBZ LF2</h1>

    <div className="hero-logos">
      <DragonBall
        strokeWidth="1"
      />
      <LittleFighter2
        strokeWidth="5"
      />

      <motion.div className="version"
        initial="initial"
        animate="animate"
        variants={versionVariants}
      >
        <p variants={versionVariants} className="version-label text-white text-right -mt-16 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.3.2 </p>
      </motion.div>
    </div>

    <p className="text-white text-center"> Project has been revived thanks to <b><i>NetaFelizZz/Excellent Approximation/Rancro</i></b> (updated sprites/data + finished SS Trunks and made Ultra Trunks and will continue the mod with my help on the side) </p>
    <br></br>
    <p className="text-white text-center"> new EXE and cool features made possible by darkfiren's exe </p>
    
    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/UjgQmvsjQY4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;
