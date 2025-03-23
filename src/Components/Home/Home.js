import "./Home.css";

import React from "react";
import Helmet from "react-helmet";

import DragonBall from "../Logo/DragonBall";
import LittleFighter2 from "../Logo/LittleFighter2";

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
// var countDownDate = new Date(Date.UTC(2025, 0, 1, 19, 0, 0)).getTime();

// Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("counter").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("counter").innerHTML = "EXPIRED";
//   }
// }, 1000);



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
        <p variants={versionVariants} className="version-label text-white text-right -mt-16 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.5.5 </p>
      </motion.div>
    </div>



    <div className="sm:block md:flex w-full">

      <div className="home-square">
        <a href="https://discord.gg/mPR3Vr5" target="_blank" rel="noopener noreferrer">
          <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-2 p-5 mx-0 text-white home-box">
            <h2 className="text-center"> JOIN OUR DISCORD COMMUNITY </h2>
            <div className="text-center text-5xl m-2">
              <a href="https://discord.gg/mPR3Vr5" target="_blank" rel="noopener noreferrer" className="fa-icon m-1 text-center">
                <FontAwesomeIcon icon={['fab', "discord"]} size="2x" color="white" /> 
              </a>
            </div>
            <ul className="text-lg">
              <li>Play Fun <span className="text-yellow">Challenges!</span></li>
              <li>Join Epic <span className="text-orange">Tournaments!</span></li>
            </ul>
          </div>
        </a>
      </div>

      <div className="home-square">
        <a href="https://www.patreon.com/DBZLF2" target="_blank" rel="noopener noreferrer">
          <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-2 p-5 mx-0 text-white home-box">
            <h2 className="text-center"> SUPPORT US BY BECOMING A PATRON </h2>
            <div className="text-center text-5xl m-2">
              <a href="https://www.patreon.com/DBZLF2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
                <FontAwesomeIcon icon={['fab', "patreon"]} size="2x" color="white" /> 
              </a>
            </div>
            <ul className="text-lg">
              <li>Early <span className="text-yellow">reveals</span></li>
              <li>Exclusive <span className="text-orange">reveals</span></li>
              <li>Early <span className="text-red">access</span></li>
              <li>Beta testing</li>
            </ul>
          </div>
        </a>
      </div>

      <div className="home-square">
        <a href="https://www.youtube.com/user/dbzlf2?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
          <div className="border-2 lf2-border-blue lf2-bg-blue rounded my-5 px-2 p-5 mx-0 text-white home-box">
            <h2 className="text-center"> SUBSCRIBE TO US ON YOUTUBE </h2>
            <div className="text-center text-5xl m-2">
              <a href="https://www.youtube.com/user/dbzlf2?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
                <FontAwesomeIcon icon={['fab', "youtube"]} size="2x" color="white" /> 
              </a>
            </div>
            <ul className="text-lg">
              <li>Development <span className="text-yellow">streams</span></li>
              <li>Awesome version <span className="text-orange">trailers</span></li>
              <li>Epic character <span className="text-red">reveals</span></li>
            </ul>
          </div>
        </a>
      </div>

    </div>


    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/z_RdDyoqPyM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>

    <div className="text-center mt-12" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/txzs-1u7qBc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>

    {/* <p className="text-white text-center"> Project has been revived thanks to <b><i>Excellent Approximation</i></b> (updated sprites/data + finished SS Trunks and made Ultra Trunks and will continue the mod with my help on the side) </p>
    <br></br>
    <p className="text-white text-center"> new EXE and cool features made possible by darkfiren's exe </p> */}
    
  </div>
);

export default Home;
