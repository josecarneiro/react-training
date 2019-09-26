import React, { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.count} - Likes</button>
      </div>
    );
  }
}
