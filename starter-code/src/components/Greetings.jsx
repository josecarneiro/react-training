import React from "react";

export default class Greetings extends React.Component {
  render() {
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour"
    };
    return (
      <span>
        {greetings[this.props.lang]} {this.props.children}
      </span>
    );
  }
}
