import React, { Component } from "react";

class PartyPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.party} Party</h2>
      </div>
    );
  }
}

export default PartyPage;
