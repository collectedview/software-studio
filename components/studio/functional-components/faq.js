import React from "react";

function FAQ() {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <span className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Make ideas come to users
            </button>
          </span>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Find your user base with an application that expresses the vibe
              you are looking to set, quickly customizable, and accessible.
              Build your dream from an MVP model with a focus on attaining users
              through a developed, collaborative, and simplified platform.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Quicker Action to market
            </button>
          </span>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Minutes instead of hours makes an impact when it means getting a
              great idea to market, deliver your solution today and begin
              scaling. Improve your process to action with familiarity around
              construct that enables you to identify super users based around
              problems and tangible solutions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Improve Experience with data
            </button>
          </span>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Measure the interaction through analytics, convert users to your
              platform, drive real people through conversions with a real
              application platform. Expand instinctive architecture to solving
              problems, improving concepts, articulating solutions, and
              delivering alternative methods to allocating indicative factors of
              success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
