import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PartyPick.css";

class PartyPick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let iconName = this.props.name.toLowerCase();
    console.log(iconName);
    return (
      <div
        className={`PartyPick ${this.props.maximized && "maximized"} ${this
          .props.minimized && "minimized"}`}
      >
        <h2>{this.props.name}</h2>
        <FontAwesomeIcon
          icon={["fas", `${iconName}`]}
          className="navLink"
          title="Switch active campaign"
        />
      </div>
    );
  }
}

export default PartyPick;
