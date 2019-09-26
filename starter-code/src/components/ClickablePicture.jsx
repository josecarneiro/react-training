import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      imgState: false
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    console.log(this.state.imgState);
    this.setState({
      imgState: !this.state.imgState
    });
    if (this.state.imgState) {
      this.setState({
        img: this.props.imgClicked
      });
    } else {
      this.setState({
        img: this.props.img
      });
    }
  }

  render() {
    return (
      <div>
        <img onClick={this.increment} src={this.state.img} alt="Hate Alt" />
      </div>
    );
  }
}
