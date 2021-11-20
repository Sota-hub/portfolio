import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import WorkList from "../../component/works/WorkList";
import Head from "next/head";

const WorksPage = () => {
  return (
    <>
      <Head>
        <title>Sota&prime;s portfolio - Works</title>
      </Head>
      <Header />
      <WorkList />
      <Footer />
    </>
  );
};

export default WorksPage;
