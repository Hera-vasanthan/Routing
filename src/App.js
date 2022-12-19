import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Role from "./Role";
import Admin from "./Admin";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Admin</Link>
            </li>
            <li>
              <Link to="/contact">Role</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<Admin />}></Route>
            <Route exact path="/contact" element={<Role />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
