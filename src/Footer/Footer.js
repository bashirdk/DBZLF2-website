import "./Footer.css";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="lf2-bg-blue border-t-2 lf2-border-blue mt-12">
    <div class="container mx-auto">
      <footer className="py-10 mx-3">  
        <div className="md:flex items-center justify-between">
          <div className="text-center md:text-left text-white">
            <p className="my-3"> Dragon Ball Z © 2003 BIRD STUDIO/ SHUEISHA, TOEI ANIMATION. </p>
            <p className="my-3"> Little Fighter 2 © 1999-2008, Marti Wong & Starsky Wong, All rights reserved.</p>
          </div>
          <div class="text-center my-5 md:text-left text-white">
            <a href="https://www.youtube.com/user/dbzlf2" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "youtube"]} size="2x" color="white" /> 
            </a>
            <a href="http://dbzlf2.blogspot.com/" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "blogger"]} size="2x" color="white" /> 
            </a>
            <a href="https://discord.gg/mPR3Vr5" target="_blank" rel="noopener noreferrer" className="fa-icon m-1">
              <FontAwesomeIcon icon={['fab', "discord"]} size="2x" color="white" /> 
            </a>          
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
