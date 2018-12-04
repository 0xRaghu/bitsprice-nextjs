import Navbar from "./Navbar";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>BitsPrice</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
