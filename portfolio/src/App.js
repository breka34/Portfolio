import './App.css';
import React from "react";
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './components/home.css';
import './components/education.css';
import './components/projects.css';
import './components/contact.css';
import './components/response.css';
import Map from './components/map';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <nav className="navbar">
          <ul className="main-nav" id="js-menu">
            <li>
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li>
              <Link to="/Education" className="nav-links">Education</Link>
            </li>
          <li>
            <Link to="/Projects" className="nav-links">Projects</Link>
          </li>
          <li>
            <Link to="/ContactMe" className="nav-links">Contact </Link>
          </li>  
         </ul>
        </nav>
       
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Education" component={Education}/>
          <Route path="/Projects" component={Projects} />
          <Route path="/ContactMe" component={ContactMe} />
        </Switch>
      
    </Router>
    
  );
}

