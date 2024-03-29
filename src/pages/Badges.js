import React from "react";

import BadgesList from "../components/BadgesList";
import api from "../api";
import PageLoader from "../components/PageLoader";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

import { Link } from "react-router-dom";

import confLogo from "../images/badge-header.svg";

import "./styles/Badges.css";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchData();

    // this.intervalId = setInterval(this.fetchData, 5000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoader />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="hero" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
        {this.state.loading && <MiniLoader />}
      </React.Fragment>
    );
  }
}

export default Badges;
