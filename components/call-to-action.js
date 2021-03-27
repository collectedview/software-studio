import React from "react";

import Image from "next/image";

function CallToAction() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="display-2">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h2>
            <h3 className="display-6">
              Excepteur sint occaecat cupidatat non proident
            </h3>
            <Image
              src="/images/placeholder.png"
              alt="Call To Action Image"
              width={500}
              height={500}
            />
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              Toggle bottom offcanvas
            </button>

            <div
              className="offcanvas offcanvas-bottom"
              tabIndex="-1"
              id="offcanvasBottom"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                  Offcanvas bottom
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body small">...</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
