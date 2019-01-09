import React, { Component } from "react";
import PartyPick from "../components/PartyPick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";
import Candidate from "../components/Candidate/Candidate";

import "./landing.css";
import CandidatePage from "../components/Candidate/Candidate";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovDem: false,
      hovRep: false,

      demList: [
        { name: "Joe Biden", currentPosition: "Former VP", class: "first" },
        {
          name: "Bernie Sanders",
          currentPosition: "Vermont Senator",
          class: "second"
        },
        {
          name: "Elizabeth Warren",
          currentPosition: "Massachusetts Senator",
          class: "third"
        },
        { name: "Julio Castro", currentPosition: "Former...", class: "fourth" },
        { name: "Kamala Harris", currentPosition: "Former...", class: "fifth" }
      ]
    };
  }

  render() {
    console.log(this.state);
    let { demList } = this.state;
    let dems = demList.map((e, i) => {
      console.log(i);
      return (
        <Candidate
          name={e.name}
          position={e.currentPosition}
          key={i}
          class={e.class}
        />
      );
    });
    return (
      <div className="Landing">
        {this.state.hovDem ? (
          <div
            className={`Democrats party maximized candidates`}
            onMouseEnter={() => {
              console.log(this.state);
              this.setState({ hovDem: true, hovRep: false });
            }}
            onMouseLeave={() => this.setState({ hovDem: false })}
          >
            <h2 style={{ width: "100%", margin: "0" }}>Front Runners</h2>
            {dems}
            <p style={{ width: "100%", margin: "0", fontSize: "14px" }}>More</p>
          </div>
        ) : (
          <div
            className={`Democrats party ${this.state.hovDem &&
              "maximized"} ${this.state.hovRep && "minimized"}`}
            onMouseEnter={() => {
              console.log(this.state);
              this.setState({ hovDem: true, hovRep: false });
            }}
            onMouseLeave={() => this.setState({ hovDem: false })}
          >
            <Link to="/democrats" className="Link">
              <div className="scalediv">
                <FontAwesomeIcon icon={["fas", "democrat"]} />
                <h2>Democrats</h2>
              </div>
            </Link>
          </div>
        )}
        <div
          className={`Republicans party ${this.state.hovRep &&
            "maximized"} ${this.state.hovDem && "minimized"}`}
          onMouseEnter={() => this.setState({ hovRep: true, hovDem: false })}
          onMouseLeave={() => this.setState({ hovRep: false })}
        >
          <Link to="/republicans" className="Link">
            <div className="scalediv">
              <FontAwesomeIcon icon={["fas", "republican"]} />
              <h2>Republican</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
