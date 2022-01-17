import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, type, children }) {
  return (
    <>
      <Head>
        <title>holodan.io</title>
      </Head>

      <Meta />
      <Header type={type} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
