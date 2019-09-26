import React from "react";

const FaceBookCard = props => {
  const divStyle = {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: props.selected ? "blue" : "white"
  };
  return (
    <div style={divStyle}>
      <img
        src={props.img}
        width="200px"
        alt=""
        style={{ marginRight: "20px" }}
      />
      <div>
        First Name: {props.firstName}
        <br />
        Last Name: {props.lastName}
        <br />
        Country: {props.country}
        <br />
        Type: {props.isStudent ? "Student" : "Teacher"}
      </div>
    </div>
  );
};

export default FaceBookCard;
