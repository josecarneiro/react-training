import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div>
        <p>Last Name:{this.props.lastName}</p>
        <p>First Name{this.props.firstName}</p>
        <p>Gender: {this.props.gender}</p>
        <p>Height: {this.props.height}</p>
        <p>Birth: {this.props.birth}</p>
        <p>
          <img src={this.props.picture} alt="CardDetails" />
        </p>
      </div>
    );
  }
}