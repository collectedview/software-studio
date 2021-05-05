import React from "react";

import Image from "next/image";
import Link from "next/link";

function Introduction() {
  return (
    <>
      <section id="introduction">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 content">
              <h1>The Solution to Launching Quickly</h1>
              <h3>Software, Startup, Venture, Movement, and Beyond</h3>
              <div className="row">
                <div className="content-group">
                  <div className="col-md-12 col-xl-5 content-group-item">
                    <Link href="/#features">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg call-to-action"
                      >
                        Begin Your Journey
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-12 col-xl-7 content-group-item">
                    <p className="lead">
                      Are you ready to launch? Familiar with Software Studio and
                      have a new venture. Quickly start now!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 content-opposite d-flex justify-content-center">
              <div className="d-flex justify-content-center">
                <Image
                  src="/software-studio-global.svg"
                  alt="Introduction Image"
                  width={750}
                  height={750}
                  loading="lazy"
                  className="content-opposite-image img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <section id="scroll-down" className="scroll-down">
          <Link href="/#interest">
            <a>
              <span></span>
            </a>
          </Link>
        </section>
      </section>
    </>
  );
}

export default Introduction;
