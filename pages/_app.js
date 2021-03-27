import React from "react";

/* Theme Styles */
import "../styles/theme.css";
import "../styles/utilities.css";

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
