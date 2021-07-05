import React from "react";
import { AppProps } from "next/app";

/* Theme Styles */
import "../styles/theme.min.css";
import "../styles/utilities.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
