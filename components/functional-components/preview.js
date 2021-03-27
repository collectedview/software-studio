import React from "react";

import Image from "next/image";

function Preview() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/images/placeholder.png"
              alt="Preview One Image"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/placeholder.png"
              alt="Preview Two Image"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/placeholder.png"
              alt="Preview Three Image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Preview;
