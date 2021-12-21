import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
