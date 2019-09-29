import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      imgValue: this.randomValue(),
      clicked: false
    };
    this.toggleDice = this.toggleDice.bind(this);
  }

  randomValue() {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

  toggleDice() {
    setTimeout(() => {
      this.setState(() => ({
        imgValue: this.randomValue()
      }));
    }, 1000);
    this.setState({
      clicked: !this.state.clicked,
      imgValue: null
    });
  }

  render() {
    console.log(this.state.imgValue);
    return (
      <Card>
        <Image
          src={
            this.state.imgValue && this.state.clicked
              ? "/img/dice-empty.png"
              : `/img/dice${this.state.imgValue}.png`
          }
          onClick={this.toggleDice}
          width="200px"
        />
      </Card>
    );
  }
}
