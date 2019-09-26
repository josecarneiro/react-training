import React, { Component } from "react";

export default class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.value = Math.floor(Math.random() * 6) + 1;
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    setTimeout(() => {
      this.setState({ value: Math.floor(Math.random() * 6) + 1 });
    }, 1000);
    this.setState({ value: 0 });
  }

  render() {
    const imgArray = [
      "/img/dice-empty.png",
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png"
    ];
    return (
      <img
        src={imgArray[this.state.value]}
        width={200}
        height={200}
        onClick={this.clicked}
        alt=""
      />
    );
  }
}
