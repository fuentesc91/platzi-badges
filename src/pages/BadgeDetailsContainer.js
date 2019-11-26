import React from "react";

import PageLoader from "../components/PageLoader";
import PageError from "../components/PageError";

import "./styles/BadgeDetails.css";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
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
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoader />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
