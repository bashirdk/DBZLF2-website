import "./Footer.css";

import React from "react";

const Footer = () => (
  <div className="lf2-bg-blue border-t-2 lf2-border-blue mt-12">
    <div class="container mx-auto">
      <footer className="py-10">  
        <div className="flex items-center justify-between">
          <div className="text-white">
            <p className="my-3"> Dragon Ball Z © 2003 BIRD STUDIO/ SHUEISHA, TOEI ANIMATION. </p>
            <p className="my-3"> Little Fighter 2 © 1999-2008, Marti Wong & Starsky Wong, All rights reserved.</p>
          </div>
          <div class="text-white">
            <ul>
              <li>Youtube</li>
              <li>Discord</li>
              <li>Blogger</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
