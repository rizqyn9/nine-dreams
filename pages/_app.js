import "../styles/globals.scss";
import Head from "next/head";
import { Provider } from "jotai";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>ninedreams</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
