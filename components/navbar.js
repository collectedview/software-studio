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

  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavCollapse = () => setNavCollapsed(!navCollapsed);

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
            <a className="navbar-brand" onClick={setNavCollapsed}>
              <Image
                src="/software-studio.svg"
                className="img-fluid"
                alt="Brand Logo"
                width={100}
                height={75}
                loading="lazy"
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
            aria-expanded={!navCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${navCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle">
              <li className="nav-item">
                <Link href="/#introduction">
                  <a className="nav-link" onClick={handleNavCollapse}>
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#interest">
                  <a className="nav-link" onClick={handleNavCollapse}>
                    Solutions
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#features">
                  <a className="nav-link" onClick={handleNavCollapse}>
                    Features
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#call-to-action">
                  <a className="nav-link" onClick={handleNavCollapse}>
                    Pricing
                  </a>
                </Link>
              </li>
            </ul>
            <div className="position-absolute top-50 end-0 translate-middle">
              <Link href="/#call-to-action">
                <button
                  className="btn btn-primary call-to-action"
                  type="submit"
                  onClick={handleNavCollapse}
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
