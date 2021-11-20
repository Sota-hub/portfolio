import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Contact from "../../component/contact/Contact";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Sota&prime;s portfolio - Contact</title>
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
