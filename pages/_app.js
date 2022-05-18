import Head from "next/head";

import "../styles/main.scss";
import "tailwindcss/tailwind.css";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cardo:wght@700&family=Merriweather&family=Lato&family=Montserrat&family=Oxygen&family=Playfair+Display:ital,wght@0,900;1,700&family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default _app;