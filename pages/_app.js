import Head from "next/head";

import "../styles/main.scss";
import "tailwindcss/tailwind.css";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default _app;