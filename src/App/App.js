import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import CharacterList from "../CharacterList";
import CharacterProfile from "../CharacterProfile";
import Navbar from "../Navbar";
import React from "react";

const Index = () => <h2>Home</h2>;

const App = () => (
  <Router>
    <>
      <Navbar />
      <Route path="/" exact component={Index} />
      <Route path="/characters/" exact component={CharacterList} />
      <Route path="/characters/:saga/:name" component={CharacterProfile} />
    </>
  </Router>
);

export default App;
