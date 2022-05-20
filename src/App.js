import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './contents/Home';
import Media from './contents/Media';
// import Contact from './contents/Contact';
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
    <Route path="/media">
    <Media />
    </Route>
    <Route path="/services">
    <Services />
    </Route>
    {/* <Route path="/contact">
    <Contact />
    </Route> */}
    </div>
    </Router>
    );
  }
  
  export default App;
  