import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.whichImage = this.props.img;
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({
      whichImage:
        this.state.whichImage === this.props.img
          ? this.props.imgClicked
          : this.props.img
    });
  }

  render() {
    return <img src={this.state.whichImage} onClick={this.clicked} alt="" />;
  }
}
