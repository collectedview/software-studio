import React from "react";

import Image from "next/image";

function Introduction() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <h1 className="display-1">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h1>
            <h3 className="display-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </h3>
            <div className="row">
              <div className="col-xl-6">
                <button type="button" className="btn btn-primary btn-lg">
                  Lorem ipsum dolor
                </button>
              </div>
              <div className="col-xl-6">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <Image
              src="/images/placeholder.png"
              alt="Introduction Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
