import Header from "../component/common/Header";
import GuideList from "../component/home/GuideList";
import Footer from "../component/common/Footer";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Sota&prime;s portfolio - Home</title>
      </Head>
      <Header />
      <GuideList />
      <Footer />
    </>
  );
};

export default HomePage;
