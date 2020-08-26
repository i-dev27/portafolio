import React from "react";

import Projects from "./components/Projects.jsx";
import Articles from "./components/Articles.jsx";
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import About from "./components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
        {/* <img src={logo} alt="Logo Image" className="logo" /> */}
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
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
