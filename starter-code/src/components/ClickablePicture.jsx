import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      imgClicked: this.props.imgClicked,
      clicked: false
    };
    this.togglePicture = this.togglePicture.bind(this);
  }
  togglePicture() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <Card>
        <Col>
          <Image
            onClick={this.togglePicture}
            src={this.state.clicked ? this.state.imgClicked : this.state.img}
            height="300px"
          />
        </Col>
      </Card>
    );
  }
}
