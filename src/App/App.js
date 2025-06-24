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
import Plan from "../Components/Plan";
import Downloads from "../Components/Downloads";
import FAQs from "../Components/FAQs";
import Guide from "../Components/Guide"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord, faBlogger, faPatreon, faItchIo, faTwitter } from '@fortawesome/free-brands-svg-icons'

import TagManager from 'react-gtm-module'

import Tools from "../Components/Tools/Tools";
import BattleModeBalancer from "../Components/BattleModeBalancer/BattleModeBalancer";
import Rect32Calculator from "../Components/Tools/Rect32Calculator";

library.add(faCoffee, faDownload, faYoutube, faDiscord, faBlogger, faPatreon, faItchIo, faTwitter)

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
              <Route exact path="/backgrounds/" component={BackgroundList} />
              <Route exact path="/plan/" component={Plan} />
              <Route exact path="/downloads/" component={Downloads} />
              <Route exact path="/faqs/"  component={FAQs} />
              <Route exact path="/guide/" component={Guide} />
              <Route exact path="/tools/" component={Tools} />
              <Route exact path="/tools/battle-mode-balancer/" component={BattleModeBalancer} />
              <Route exact path="/tools/rec32-calculator/" component={Rect32Calculator} />
              <Route exact path="/" component={Home} />
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
