import PlausibleProvider from "next-plausible";

import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="holodan.io">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
