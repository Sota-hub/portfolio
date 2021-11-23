import Head from "next/head";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import HistorySkill from "../../component/about/HistorySkill";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title key="title">Sota&prime;s portfolio - About</title>
      </Head>
      <Header />
      <HistorySkill />
      <Footer />
    </>
  );
};

export default AboutPage;
