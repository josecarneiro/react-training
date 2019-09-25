import React, { Component } from "react";

export default class Greetings extends Component {
  render() {
    return (
      <div>
        <p>First Name: {this.props.children}</p>
        <p>Language: {this.props.lang}</p>
      </div>
    );
  }
}
