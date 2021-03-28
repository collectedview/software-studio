import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/jsx-no-duplicate-props */
function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar fixed-top navbar-expand-xl navbar-light active"
            : "navbar fixed-top navbar-expand-xl navbar-light"
        }
      >
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src="/images/software-studio.svg"
                className="img-fluid"
                alt="Brand Logo"
                width={100}
                height={75}
                className="d-inline-block align-text-top"
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle">
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
            <div className="position-absolute top-50 end-0 translate-middle">
              <Link href="/#call-to-action">
                <button
                  className="btn btn-primary call-to-action"
                  type="submit"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
