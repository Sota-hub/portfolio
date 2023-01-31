import Head from "next/head";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Contact from "../../component/contact/Contact";
import Closed from "../../component/common/Closed";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title key="title">Sota&prime;s portfolio - Contact</title>
      </Head>
      <Header />
      {/* <Contact /> */}
      <Closed message="Temporary closed" />
      <Footer />
    </>
  );
};

export default ContactPage;
