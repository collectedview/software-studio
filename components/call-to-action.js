import React from "react";

import Link from "next/link";

function CallToAction() {
  return (
    <>
      <section id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="content">
                <h2>Deploy your solution today</h2>
                <h4>Quickly iterable react framework in next.js</h4>
                <p className="lead">
                  Ventures ready to strike with the iron hot. Simplified React
                  architecture within Next.js server technology to reach the end
                  of the globe with ideas and concepts.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 offset-xl-2">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Open Source Solution</h4>
                  <h2 className="card-title">React Ventures Application</h2>
                  <p className="card-text">
                    Download, Fork, Support, and Build in your own time with the
                    framework built for you on NPM.
                  </p>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Single Page
                      Application
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Loader &
                      Light/Dark Mode
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Page Speed
                      Optimized
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Server Side
                      Rendered
                    </li>
                  </ul>
                  <div className="content-group d-flex mt-auto align-items-center">
                    <span className="price content-group-item">Free</span>
                    <div className="content-group-item ml-auto">
                      <Link href="https://www.npmjs.com/package/react-ventures">
                        <a
                          className="btn btn-primary call-to-action"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Free Plan
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card featured">
                <div className="card-body">
                  <h4 className="card-title">Customized Solution</h4>
                  <h2 className="card-title">React X Next.js Application</h2>
                  <p className="card-text">
                    Hand-coded variant of open-source solution with specific
                    implementation to your liking.
                  </p>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Custom Logo &
                      Branding
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Custom Loader
                      Settings
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Custom Font
                      Integrations
                    </li>
                    <li className="py-1">
                      <i className="far fa-check-square"></i> Custom Feature
                      Addition
                    </li>
                  </ul>
                  <div className="content-group d-flex mt-auto align-items-center">
                    <span className="price content-group-item">$2000</span>
                    <div className="content-group-item ml-auto">
                      <Link href="mailto:collectedview@gmail.com">
                        <a
                          className="btn btn-primary call-to-action"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Premium Plan
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
