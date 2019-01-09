import React, { Component } from "react";
import "./candidate.css";

class CandidatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className={`CandidateBox ${this.props.class}`}>
        <h3>{this.props.position || "Presidential Candidate"}</h3>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default CandidatePage;
