import "./Home.css";

import React from "react";
import Helmet from "react-helmet";

import DragonBall from "../Logo/DragonBall";
import LittleFighter2 from "../Logo/LittleFighter2";

import { motion } from 'framer-motion'

const versionVariants = {
  initial: {
    opacity: 0,
    y: 0,
    fontSize: '0px'
  }, 
  animate: {
    opacity: 1,
    y: -200,
    fontSize: '40px',
    transition: {
      delay: 6,
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
<br></br>
<br></br>
<br></br>
<br></br>
    <br></br>
    <br></br>

  <div  style={{ textAlign: "center" }}>
    <div className="hero-logos">
      <DragonBall
        strokeWidth="1"
      /><br></br>
      <LittleFighter2
        strokeWidth="5"
      />
</div>
      <motion.div className="version"
        initial="initial"
        animate="animate"
        variants={versionVariants}
      >
      <br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 variants={versionVariants} className="version-label text-white text-center -mt-16 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.3.2 </h1>
      </motion.div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className="text-center text-white">
      Project has been revived thanks to <b><i>Excellent Approximation</i></b> (updated sprites/data + finished SS Trunks and made Ultra Trunks and will continue the mod with my help in the bg)
      <br></br><br></br>
      EXE and cool features thanks to <b><i>darkfiren</i></b>'s exe
    </div>
    
    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/qr8AJyuS-VY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;
