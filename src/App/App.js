import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop";
import ReactGA from 'react-ga';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import CharacterList from "../Components/CharacterList";
import CharacterProfile from "../Components/CharacterProfile";
import Downloads from "../Components/Downloads";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord, faBlogger } from '@fortawesome/free-brands-svg-icons'

import TagManager from 'react-gtm-module'

library.add(faCoffee, faDownload, faYoutube, faDiscord, faBlogger)

const tagManagerArgs = {
  gtmId: 'GTM-N2KK6S5'
}
TagManager.initialize(tagManagerArgs)

ReactGA.initialize('UA-63142906-4');
ReactGA.pageview('/');

const NoMatch = () => <h1 className="text-white text-center my-24">404: Page not found</h1>

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <div className="mx-3">     
          <ScrollToTop>     
            <Switch>            
              <Route path="/characters/:saga/:name" component={CharacterProfile} />
              <Route path="/characters/" exact component={CharacterList} />
              <Route path="/downloads/" exact component={Downloads} />
              <Route path="/" exact component={Home} />
              <Route component={NoMatch} />            
            </Switch>
          </ScrollToTop>
        </div>
      </div>
      <Footer />
      <initializeReactGA/>
    </>
  </Router>  
);

export default App;
