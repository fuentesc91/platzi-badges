import React from "react";

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
  state = {};

  handleClick = e => {
    console.log("click");
  };

  render() {
    return (
      <div>
        <h2>{this.props.tittle}</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />

            <label>email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValues.email}
            />

            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />

            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <div className="lastRow">
            <button onClick={this.props.onSubmit} className="btn btn-primary">
              Save
            </button>
            {this.props.error && (
              <p className="text-error">{this.props.error.message}</p>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
