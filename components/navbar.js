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
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAC4jAAAuIwF4pT92AAANJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNi0xOFQxMTo0MDo0Mi0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNi0xOFQxMjo0MzoyOC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDYtMThUMTI6NDM6MjgtMDQ6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjlmYzUwZTgtOTZhZS1mOTQ0LWFlYmQtZmJhZDM2ZGNmZTY0IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YjUzMTI3ODgtNjliNC0zOTRkLTljNDQtNGI5OWJhMGQ0YTcxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I3NWM2NTYtMzQ1Ny1iZTQxLWE4ZWYtMjIzYjI3ZDg4M2Q0IiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHRpZmY6SW1hZ2VXaWR0aD0iMTAiIHRpZmY6SW1hZ2VMZW5ndGg9IjEwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSIzMDAwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSIzMDAwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjEiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYjc1YzY1Ni0zNDU3LWJlNDEtYThlZi0yMjNiMjdkODgzZDQiIHN0RXZ0OndoZW49IjIwMjEtMDYtMThUMTE6NDA6NDItMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWY3MWE1NDktYjI1ZS0wMDRlLTk3ZmEtMmFjNWIxMzQyOGYyIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTE4VDExOjQwOjQyLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlZTRhNjgyLTMyODAtZTI0ZC05YTRiLWMzNmQ2ZDg5YjZkZiIgc3RFdnQ6d2hlbj0iMjAyMS0wNi0xOFQxMjo0MzoyOC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOWZjNTBlOC05NmFlLWY5NDQtYWViZC1mYmFkMzZkY2ZlNjQiIHN0RXZ0OndoZW49IjIwMjEtMDYtMThUMTI6NDM6MjgtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmVlNGE2ODItMzI4MC1lMjRkLTlhNGItYzM2ZDZkODliNmRmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YjVjNjcwYTctY2RmNS0zMzQ5LWE1OWQtZjg0MDE3Y2U4NDljIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I3NWM2NTYtMzQ1Ny1iZTQxLWE4ZWYtMjIzYjI3ZDg4M2Q0Ii8+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjFFQTM2QjgzNjBENjYyMUFFNzgwOUI1QTc0Q0QzMjZBPC9yZGY6bGk+IDxyZGY6bGk+M0Q0NTJBODkzNDIwODJBNjlDQTMxNDE3QTM2QkZGOTc8L3JkZjpsaT4gPHJkZjpsaT42RjI5MThBRDA5QkRGMzY0MjFCRTZCMEIyNENBNzdERTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NDFmMzcwNi0yMTQwLWQzNDEtOTFhYS04MWM3MGJjOTM3ZTY8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YTJhMDk3MWYtMzZiYS05NTRkLThmZjAtNDNlMDhmMjQ2NjJlPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx0aWZmOkJpdHNQZXJTYW1wbGU+IDxyZGY6U2VxPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvdGlmZjpCaXRzUGVyU2FtcGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqmL/4gAAAAYSURBVBiVY+yduc6BgQjARIyiUYXUUwgAYQoCKIWu5/AAAAAASUVORK5CYII="
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
