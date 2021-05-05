import React from "react";

import Image from "next/image";

function Technology() {
  return (
    <>
      <section id="technology">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/html5.svg"
                alt="Technology Image"
                width={100}
                height={75}
                className="img-fluid d-flex justify-content-center"
              />
            </div>
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/css3.svg"
                alt="Technology Image"
                width={100}
                height={75}
                className="img-fluid d-flex justify-content-center"
              />
            </div>
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/bootstrap.svg"
                alt="Technology Image"
                width={100}
                height={75}
                className="img-fluid d-flex justify-content-center"
              />
            </div>
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/react.svg"
                alt="Technology Image"
                width={100}
                height={75}
                className="img-fluid d-flex justify-content-center"
              />
            </div>
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/next.svg"
                alt="Technology Image"
                width={100}
                height={75}
                className="img-fluid d-flex justify-content-center"
              />
            </div>
            <div className="col-xl-2 d-flex justify-content-center">
              <Image
                src="/github.svg"
                alt="Technology Image"
                width={100}
                height={75}
                loading="lazy"
                className="img-fluid d-flex justify-content-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technology;
