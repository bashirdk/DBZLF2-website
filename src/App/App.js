import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

import CharacterList from "../CharacterList";
import CharacterProfile from "../CharacterProfile";
import Navbar from "../Navbar";
import React from "react";

const Index = () => <h2>Home</h2>;
const NoMatch = () => <h1 className="text-white text-center my-24">404: Page not found</h1>

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mx-3">     
          <ScrollToTop>     
            <Switch>            
              <Route path="/characters/:saga/:name" component={CharacterProfile} />
              <Route path="/characters/" exact component={CharacterList} />
              <Route path="/" exact component={Index} />
              <Route component={NoMatch} />            
            </Switch>
          </ScrollToTop>
        </div>
      </div>
    </>
  </Router>
);

export default App;
