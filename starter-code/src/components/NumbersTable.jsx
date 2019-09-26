import React from "react";

export default function NumbersTable(props) {
  var oddStyle = {
    border: "1px solid",
    width: "80px",
    height: "80px",
    color: "black",
    backgroundColor: "white"
  };
  var pStyle = {
    color: "black",
    border: "1px solid",
    width: "80px",
    height: "80px",
    backgroundColor: "red"
  };
  function renderTable(props) {
    let arr = [];
    for (let i = 0; i < props.limit; i++) {
      if (i % 2 === 0) {
        arr.push(<td style={oddStyle}>{i + 1}</td>);
      } else {
        arr.push(<td style={pStyle}>{i + 1}</td>);
      }
    }
    return arr;
  }
  return (
    <div>
      <table>
        <td>
          <tr>{renderTable(props)}</tr>
        </td>
      </table>
    </div>
  );
}
