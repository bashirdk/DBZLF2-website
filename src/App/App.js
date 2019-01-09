import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import CharacterList from "../CharacterList";
import CharacterProfile from "../CharacterProfile";
import Navbar from "../Navbar";
import React from "react";

const Index = () => <h2>Home</h2>;
const NoMatch = () => <h2>404: Not found</h2>

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container mx-auto">
        <Switch>
          <Route path="/characters/:saga/:name" component={CharacterProfile} />
          <Route path="/characters/" exact component={CharacterList} />
          <Route path="/" exact component={Index} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </>
  </Router>
);

export default App;
