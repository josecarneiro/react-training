import React from "react";

export default function test(props) {
  function numbersAsStars(props) {
    let arr = [];
    for (let i = 0; i < Math.round(props.children); i++) {
      arr.push("★");
    }
    for (let i = 0; i < 5 - Math.round(props.children); i++) {
      arr.push("☆");
    }

    return arr.join("");
  }

  return (
    <div>
      <div> {numbersAsStars(props)}</div>
    </div>
  );
}
