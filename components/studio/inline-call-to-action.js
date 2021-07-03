import React from "react";

import Link from "next/link";

function InlineCallToAction() {
  return (
    <>
      <section id="technology">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center">
              <h3>Looking for Pre-built Solutions?</h3>
            </div>
            <div className="col-xl-6 d-flex justify-content-center">
              <Link href="/bundles/#products">
                <button
                  className="btn btn-primary call-to-action"
                  type="submit"
                >
                  Pre-Bundled Technologies
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
