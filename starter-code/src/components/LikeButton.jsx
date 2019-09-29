import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter2: 0
    };
    this.colors = ["red", "purple", "brown", "blue", "green", "black"];
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    let color = this.state.counter % this.colors.length;
    console.log(color);
    return (
      <Card>
        <div>
          <Button
            variant="outline-warning"
            size="lg"
            onClick={this.incrementCounter}
            style={{
              backgroundColor: this.colors[color],
              color: "white"
            }}
          >
            {this.state.counter} Likes
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={this.incrementCounter}
          >
            {this.state.counter2} Likes
          </Button>
        </div>
      </Card>
    );
  }
}
