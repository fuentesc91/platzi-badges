import React from "react";

import Loader from "./Loader";

import "./styles/PageLoader.css";

function PageLoader() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoader;
