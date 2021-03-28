import React from "react";

import Image from "next/image";

function Features() {
  return (
    <>
      <section id="features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 content">
              <h2>Faster forward Facing facets</h2>
              <h4>Ventures ready to strike with the iron hot</h4>
              <div className="content-item">
                <h5>Direct to market</h5>
                <p className="lead">
                  Ventures ready to strike with the iron hot. Move quickly into
                  your new product solution instead of idle time spent thinking
                  through your interactive elements.
                </p>
              </div>
              <div className="content-item">
                <h5>Future Forward</h5>
                <p className="lead">
                  Simplified React architecture within Next.js server technology
                  to reaching the end of the global with ideas and concepts.
                </p>
              </div>
              <div className="content-item">
                <h5>Mindset Focused</h5>
                <p className="lead">
                  Narrow views of abstraction create a template for envoring
                  particulars to establish finite constructions of ability with
                  the market.
                </p>
              </div>
            </div>
            <div className="col-xl-6 content-opposite d-flex justify-content-center">
              <div className="d-flex justify-content-center">
                <Image
                  src="/images/software-studio-deploy-solution.svg"
                  alt="Introduction Image"
                  width={750}
                  height={750}
                  className="content-opposite-image img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
