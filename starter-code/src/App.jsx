import React, { Component } from "react";

import IdCard from "./components/IdCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          firstName="first"
          lastName="last"
          gender="DTS"
          height={165}
          birth={new Date("1988-05-13")}
          picture="https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Influence.png"
        />
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
