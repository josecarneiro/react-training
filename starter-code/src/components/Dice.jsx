import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBg: "/img/dice3.png",
      imgClickBg: "/img/dice-empty.png",
      imgDelayedBg: "/img/dice6.png"
    };
    this.DelayedImg = this.DelayedImg.bind(this);
  }

  DelayedImg() {
    this.setState({
      imgBg: this.state.imgClickBg
    });
    const timer = setTimeout(() => {
      this.setState({
        imgBg: this.state.imgDelayedBg
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <img
          onClick={this.DelayedImg}
          src={this.state.imgBg}
          width="200px"
          alt="Hate Alt"
        />
      </div>
    );
  }
}
