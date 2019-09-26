import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.currImg = 0;
    this.state.length = this.props.imgs.length;
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  goLeft() {
    this.setState({
      currImg: (this.state.currImg + this.state.length - 1) % this.state.length
    });
  }

  goRight() {
    this.setState({
      currImg: (this.state.currImg + 1) % this.state.length
    });
  }

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.currImg]} alt="" />
        <br />
        <button onClick={this.goLeft}>Left</button>
        <button onClick={this.goRight}>Right</button>
      </div>
    );
  }
}
