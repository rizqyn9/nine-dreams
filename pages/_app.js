import "../styles/globals.scss";
import Head from "next/head";
import { Provider } from "jotai";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>ninedreams</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
