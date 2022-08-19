import React, { useContext } from 'react';
import './App.scss';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Works from './Works';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import { ThemeContext } from './Theme';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`app-body ${theme}`}>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
