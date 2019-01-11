import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTop from "../ScrollToTop";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../Home";
import CharacterList from "../CharacterList";
import CharacterProfile from "../CharacterProfile";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord, faBlogger } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee, faYoutube, faDiscord, faBlogger)

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
              <Route path="/" exact component={Home} />
              <Route component={NoMatch} />            
            </Switch>
          </ScrollToTop>
        </div>
      </div>
      <Footer />
    </>
  </Router>
);

export default App;
