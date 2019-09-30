import React, { Component } from "react";

export default class Greetings extends Component {
  render() {
    return (
      <div>
        <p>Language: {this.props.lang}</p>
        <p>First Name: {this.props.children}</p>
      </div>
    );
  }
}