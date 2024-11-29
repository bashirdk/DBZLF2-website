import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop";
import ReactGA from 'react-ga';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import CharacterList from "../Components/CharacterList";
import CharacterProfile from "../Components/CharacterProfile";
import BackgroundList from "../Components/BackgroundList/BackgroundList";
import BackgroundProfile from "../Components/BackgroundProfile";
import Downloads from "../Components/Downloads";
import FAQs from "../Components/FAQs";
import Guide from "../Components/Guide"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord, faBlogger, faPatreon } from '@fortawesome/free-brands-svg-icons'

import TagManager from 'react-gtm-module'

library.add(faCoffee, faDownload, faYoutube, faDiscord, faBlogger, faPatreon)

const tagManagerArgs = {
  gtmId: 'GTM-N2KK6S5'
}
TagManager.initialize(tagManagerArgs)

ReactGA.initialize('UA-63142906-4');
ReactGA.pageview('/');

const NoMatch = () => <h1 className="text-white text-center my-24">404: Page not found</h1>

const characterKey = window.location.pathname;

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <div className="mx-3">
          <ScrollToTop>
            <Switch>
              <Route exact path="/characters/:saga/:subsaga/:name" component={withRouter(CharacterProfile)} key={characterKey} />
              <Route exact path="/characters/:saga/:name" component={withRouter(CharacterProfile)} key={characterKey} />
              <Route exact path="/characters/" component={CharacterList} />
              <Route path="/backgrounds/:saga/:name" component={BackgroundProfile} />
              <Route path="/backgrounds/" exact component={BackgroundList} />
              <Route path="/downloads/" exact component={Downloads} />
              <Route path="/faqs/" exact component={FAQs} />
              <Route path="/guide/" exact component={Guide} />
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
