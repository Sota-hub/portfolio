import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Works from "../../component/Works";
const ids = [1, 2, 3];

const WorksPage = () => {
  return (
    <>
      <Header />
      <Works ids={ids} />
      <Footer />
    </>
  );
};

export default WorksPage;
