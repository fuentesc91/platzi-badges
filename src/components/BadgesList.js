import React from "react";

import BadgesListItem from "./BadgesListItem";

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
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
