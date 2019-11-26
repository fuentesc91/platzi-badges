import React from 'react'
import Gravatar from './Gravatar'

function BadgesListItem(props) {
    return(
        <div className="BadgesList">
                <div className="BadgesList__img">
                  <Gravatar email={props.badge.email} alt="avatar" />
                </div>
                <div className="BadgesList__info">
                  <span className="font-weight-bold">
                    {props.badge.firstName} {props.badge.lastName}
                  </span>
                  <span className="BadgesList__twitter">@{props.badge.twitter}</span>
                  <span>{props.badge.jobTitle}</span>
                </div>
              </div>
    )
}

export default BadgesListItem