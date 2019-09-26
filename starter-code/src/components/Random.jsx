import React from "react";

const Random = props => {
  const min = props.min;
  const max = props.max;
  const rando = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <span>
      Random value between {min} and {max}: {rando}
    </span>
  );
};

export default Random;
