import React from "react";

/* Theme Styles */
import "../styles/theme.min.css";
import "../styles/utilities.min.css";

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
