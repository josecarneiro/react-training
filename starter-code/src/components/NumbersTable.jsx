import React from "react";

const NumbersTable = props => {
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    fontSize: "2em"
  };
  const subDivStyle1 = {
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  };
  const subDivStyle2 = {
    backgroundColor: "red",
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  };
  const newArray = [..." ".repeat(props.limit)];
  // console.log(newArray);
  return (
    <div style={divStyle}>
      {newArray.map((_, index) => {
        return (
          <div key={index + 1} style={index % 2 ? subDivStyle2 : subDivStyle1}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
