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


// Set the date we're counting down to
var countDownDate = new Date(Date.UTC(2025, 0, 1, 19, 0, 0)).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);



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
        <p variants={versionVariants} className="version-label text-white text-right -mt-16 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.4.3 </p>
      </motion.div>
    </div>

    <div className="text-center text-white">
      <p className="mb-5 text-3xl"> DBZ LF2 v0.5.5 RELEASE </p>
      <p className="mb-5 text-4xl"> January 1, 2025 </p>
      <p className="mb-5 text-4xl"> AVAILABLE IN </p>
      <h3 className="mb-5 text-5xl" id="counter">COUNTDOWN</h3>
    </div>
    
    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/Hfrtfk4RPJE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>

    {/* <p className="text-white text-center"> Project has been revived thanks to <b><i>Excellent Approximation</i></b> (updated sprites/data + finished SS Trunks and made Ultra Trunks and will continue the mod with my help on the side) </p>
    <br></br>
    <p className="text-white text-center"> new EXE and cool features made possible by darkfiren's exe </p> */}
    

    <h2 className="text-white text-center mt-12"> CURRENT VERSION </h2>

    <div className="text-center mt-6" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/6moqrHUK_6s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;
