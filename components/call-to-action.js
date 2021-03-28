import React from "react";

import Image from "next/image";
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
                  Ventures ready to strike with the iron hot. Move quickly into
                  your new product solution instead of idle time spent thinking
                  through your interactive elements.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 offset-xl-2">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Open Source Solution</h4>
                  <h5 className="card-title">React Ventures</h5>
                  <p className="card-text">
                    Download, Fork, Support, and Build in your own time and way
                    with the framework build for you on GitHub.
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
                  <div className="d-flex mt-3 align-items-center">
                    <h2 className="price">Free</h2>
                    <div className="ml-auto">
                      <Link href="https://www.npmjs.com/package/react-ventures">
                        <a
                          className="btn btn-primary call-to-action"
                          target="_blank"
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
                  <h5 className="card-title">React X Next.js Application</h5>
                  <p className="card-text">
                    Hand coded variant of open source solution with specific
                    implementation.
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
                  <div className="d-flex mt-3 align-items-center">
                    <h2 className="price">$2000</h2>
                    <div className="ml-auto">
                      <Link href="mailto:collectedview@gmail.com">
                        <a
                          className="btn btn-primary call-to-action"
                          target="_blank"
                        >
                          Choose Plan
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
