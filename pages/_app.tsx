import { AppProps } from "next/app";

import "../styles.css";

/* Theme Styles */
import "../styles/theme.min.css";
import "../styles/utilities.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
