import React from "react";
import logo from "./logo.svg";
import Projects from "./Projects.jsx";
import Articles from "./Articles.jsx";
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import About from "./About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <img src={logo} alt="Logo Image" className="logo" />
          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/articles" className="item">
              Articles
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
