import React from "react";

class IdCard extends React.Component {
  render() {
    const lastName = this.props.lastName;
    const firstName = this.props.firstName;
    const gender = this.props.gender;
    const height = this.props.height;
    const birth = this.props.birth;
    const picture = this.props.picture;

    return (
      <div className="id-card">
        <div className="id-picture">
          <img src={picture} alt="" />
        </div>
        <div className="id-stats">
          <b>First name: </b>
          {firstName}
          <br />
          <b>Last name: </b>
          {lastName}
          <br />
          <b>Gender: </b>
          {gender}
          <br />
          <b>Height: </b>
          {(height / 100).toFixed(2) + "m"}
          <br />
          <b>Birth: </b>{" "}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][birth.getDay()]}{" "}
          {birth.toISOString().slice(0, 10)}
        </div>
      </div>
    );
  }
}

export default IdCard;
