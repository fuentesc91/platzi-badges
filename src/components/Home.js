import React from "react";

import { Link } from "react-router-dom";

import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

import "./styles/Home.css";

function Home() {
  return (
    <div className="container-fluid Home">
      <div className="row Home__container">
        <div className="col-md-4 Home__conf">
          <img src={confLogo} alt="PlatziConf Logo" />
          <h1>PRINT YOUR BADGES</h1>
          <span>The easiest way to manage your conference</span>
          <Link className="btn btn-success" to="/badges">
            Start now
          </Link>
        </div>
        <div className="col-md-8 d-none d-md-flex Home__astronauts">
          <img src={astronauts} alt="Astronauts" />
        </div>
      </div>
    </div>
  );
}

export default Home;
