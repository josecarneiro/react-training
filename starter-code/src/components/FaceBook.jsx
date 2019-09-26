import React, { Component } from "react";
import profiles from "./../data/berlin.json";
import FaceBookCard from "./FaceBookCard";

export default class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    let countries = profiles.map(profile => profile.country);
    countries = new Set(countries); // Convert to set to remove duplicate entries
    countries = Array.from(countries); // Convert back to array to enable map() operation
    this.state.countries = countries;
    this.state.country = null;
    this.changeButton = this.changeButton.bind(this);
  }

  changeButton(country) {
    let newCountry;
    if (this.state.country === country) {
      newCountry = null;
    } else {
      newCountry = country;
    }
    this.setState({ country: newCountry });
  }

  render() {
    return (
      <div>
        {this.state.countries.map(country => {
          return (
            <button key={country} onClick={e => this.changeButton(country)}>
              {this.state.country === country ? <i>{country}</i> : country}
            </button>
          );
        })}
        {profiles.map(profile => {
          return (
            <FaceBookCard
              key={profile.firstName + profile.lastName}
              firstName={profile.firstName}
              lastName={profile.lastName}
              country={profile.country}
              isStudent={profile.isStudent}
              img={profile.img}
              selected={this.state.country === profile.country}
            />
          );
        })}
      </div>
    );
  }
}
