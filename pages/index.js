import Head from "next/head";

import Header from "../component/common/Header";
import GuideList from "../component/home/GuideList";
import Footer from "../component/common/Footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title key="title">Sota&prime;s portfolio - Home</title>
      </Head>
      <Header />
      <GuideList />
      <Footer />
    </>
  );
};

export default HomePage;
