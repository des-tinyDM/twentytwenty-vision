import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/landing";
import { Main } from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Candidates</p>
          <Link to="/" className="Link">
            <h3>Learn2020</h3>
          </Link>
          <p>Issues</p>
        </header>
        <div className="App-body">{Main}</div>
      </div>
    );
  }
}

export default App;
