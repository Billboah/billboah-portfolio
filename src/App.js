import React from 'react';
import './App.scss';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Works from './Works';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Service from './Service';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
