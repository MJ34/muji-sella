import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>#MujiSellaUntukSelamanya</title>
        <meta name="title" content="#MujiSellaUntukSelamanya" />
        <meta
          name="description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Sella Puspita Rani dan Mujiono."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://undanganmujisella.vercel.app" />
        <meta property="og:title" content="#MujiSellaUntukSelamanya" />
        <meta
          property="og:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Sella Puspita Rani dan Mujiono."
        />
        <meta
          property="og:image"
          content="https://muji-sella.vercel.app/images/landing_.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://undanganmujisella.vercel.app" />
        <meta property="twitter:title" content="#MujiSellaUntukSelamanya" />
        <meta
          property="twitter:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Sella Puspita Rani dan Mujiono."
        />
        <meta
          property="twitter:image"
          content="https://undanganmujisella.vercel.app/images/landing_.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
