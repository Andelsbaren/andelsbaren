import React from 'react';
import './App.css';

import './Sandoval.woff2'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './contents/Home';
import Services from './contents/Services';
import AboutUs from './contents/AboutUs';


function App() {
  return (
    <Router>
    <div className="pages">
    <NavBar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/aboutus">
    <AboutUs />
    </Route>
    <Route path="/services">
    <Services />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  