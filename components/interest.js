import React from "react";

import Image from "next/image";

import FAQ from "@components/functional-components/faq";

function Introduction() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <Image
              src="/images/placeholder.png"
              alt="Interest Image"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-6">
            <h2 className="display-2">
              Ut enim ad minim veniam, quis nostrud exercitation
            </h2>
            <h3 className="display-6">
              Excepteur sint occaecat cupidatat non proident
            </h3>
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
