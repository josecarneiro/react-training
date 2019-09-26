import React from "react";
import numbersAsStars from "./numbersAsStars";

export default function test(props) {
  return (
    <div>
      <div> {numbersAsStars(props.children)}</div>
    </div>
  );
}
