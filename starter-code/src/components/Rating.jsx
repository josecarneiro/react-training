import React from "react";

const Rating = props => {
  const numRating = Math.round(parseFloat(props.children));
  const starRating = "★".repeat(numRating) + "☆".repeat(5 - numRating);
  return <div>{starRating}</div>;
};

export default Rating;
