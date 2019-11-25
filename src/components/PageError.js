import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <h2 className="Error">Oops!</h2>
      <span>This is embarrasing :v. We get the following error:</span>
      <span className="font-weight-bold">"{props.error.message}"</span>
    </div>
  );
}

export default PageError;
