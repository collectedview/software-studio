import React from "react";

import Image from "next/image";
import Link from "next/link";

import Copyright from "@components/functional-components/copyright";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link href="/#introduction">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#interest">
                    <a className="nav-link">Solutions</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#features">
                    <a className="nav-link">Features</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#call-to-action">
                    <a className="nav-link">Pricing</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-12">
              <div className="copyright-image d-flex justify-content-center">
                <Link href="https://collectedview.io/">
                  <a target="_blank">
                    <Image
                      src="/collectedview-software-studio.png"
                      alt="Collectedview Software Studio"
                      height={50}
                      width={200}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="copyright">
                <p>
                  <Copyright />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
