import React from "react";

import Link from "next/link";

function InlineCallToAction() {
  return (
    <>
      <section id="inline-call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 d-flex justify-content-center">
              <h4>
                See more of our pre-bundled technolgies to purchase &amp; deploy
              </h4>
            </div>
            <div className="col-xl-4 d-flex justify-content-center">
              <Link href="/bundles/#products">
                <button
                  className="btn btn-primary call-to-action"
                  type="submit"
                >
                  Shop Pre-Bundled
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InlineCallToAction;
