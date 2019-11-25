import React from "react";

import Gravatar from "./Gravatar";

import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges where found</h3>
          <Link className="btn btn-primary" to="badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div className="BadgesList">
                <div className="BadgesList__img">
                  <Gravatar email={badge.email} alt="avatar" />
                </div>
                <div className="BadgesList__info">
                  <span className="font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </span>
                  <span className="BadgesList__twitter">@{badge.twitter}</span>
                  <span>{badge.jobTitle}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
