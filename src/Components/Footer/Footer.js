import "./Footer.css";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="lf2-bg-blue border-t-2 lf2-border-blue mt-12">
    <div className="container mx-auto">
      <footer className="py-10 mx-3">  
        <div className="md:flex items-center justify-between">
          <div className="text-center md:text-left text-white footer-links">
            <p className="my-3"> Dragon Ball Z © 2003 BIRD STUDIO/ SHUEISHA, TOEI ANIMATION. </p>
            <p className="my-3"> <a href="https://lf2.net/" target="_blank" rel="noreferrer"> Little Fighter 2 </a> © 1999-2008, <a href="http://martiwong.com/" target="_blank" rel="noreferrer">Marti Wong</a> & <a href="https://lf2.net/starsky/" target="_blank" rel="noreferrer">Starsky Wong</a>, All rights reserved.</p>
          </div>
          <div className="text-center my-5 md:text-left text-white">
            <a href="https://www.youtube.com/user/dbzlf2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "youtube"]} size="2x" color="white" /> 
            </a>
            <a href="https://discord.gg/mPR3Vr5" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "discord"]} size="2x" color="white" /> 
            </a>
            <a href="https://www.patreon.com/DBZLF2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "patreon"]} size="2x" color="white" /> 
            </a>
            <a href="https://dbzlf2.itch.io/dbzlf2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "itch-io"]} size="2x" color="white" /> 
            </a>
            <a href="https://x.com/dbzlf2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "twitter"]} size="2x" color="white" /> 
            </a>
            <a href="http://dbzlf2.blogspot.com/" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "blogger"]} size="2x" color="white" /> 
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
