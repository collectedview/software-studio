import React from "react";

import Image from "next/image";

import FAQ from "@components/functional-components/faq";

function Introduction() {
  return (
    <>
      <section id="interest">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 content-opposite">
              <Image
                src="/software-studio-cloud.svg"
                alt="Interest Image"
                width={750}
                height={750}
                loading="lazy"
                className="img-fluid"
              />
            </div>
            <div className="col-xl-6 content">
              <h2>Launch today, not tommorow</h2>
              <h4>Move with agility to user traffic</h4>
              <FAQ />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
