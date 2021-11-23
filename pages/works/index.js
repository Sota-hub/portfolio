import Head from "next/head";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import WorkList from "../../component/works/WorkList";

const WorksPage = () => {
  return (
    <>
      <Head>
        <title key="title">Sota&prime;s portfolio - Works</title>
      </Head>
      <Header />
      <WorkList />
      <Footer />
    </>
  );
};

export default WorksPage;
