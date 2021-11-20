import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import SkillList from "../../component/about/SkillList";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Sota&prime;s portfolio - About</title>
      </Head>
      <Header />
      <SkillList />
      <Footer />
    </>
  );
};

export default AboutPage;
