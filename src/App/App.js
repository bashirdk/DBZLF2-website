import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../Navbar';
import CharacterList from '../CharacterList';

const Index = () => <h2>Home</h2>
import CharacterProfile from "../CharacterProfile";

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
