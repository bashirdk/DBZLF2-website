import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../Navbar';
import Characters from '../Characters';

const Index = () => <h2>Home</h2>

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/" exact component={Index} />
      <Route path="/characters/" component={Characters} />
    </div>
  </Router>
);


export default App;
