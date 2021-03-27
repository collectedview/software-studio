import React from "react";

import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Active
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Link</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Link</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link disabled"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
