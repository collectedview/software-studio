import React from "react";

import Preview from "@components/functional-components/preview";

function Features() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <h2 className="display-2">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h2>
            <h3 className="display-6">
              Excepteur sint occaecat cupidatat non proident
            </h3>
            <h4 className="display-5">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h4>
            <p className="lead">
              Excepteur sint occaecat cupidatat non proident
            </p>
            <h4 className="display-5">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h4>
            <p className="lead">
              Excepteur sint occaecat cupidatat non proident
            </p>
            <h4 className="display-5">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h4>
            <p className="lead">
              Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
          <div className="col-xl-6">
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
