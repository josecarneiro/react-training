import React, { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.likes = 0;
    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return <button onClick={this.addLike}>{this.state.likes} Likes</button>;
  }
}
