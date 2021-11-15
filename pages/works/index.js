import Header from "../../component/common/Header";
import Works from "../../component/Works";
const ids = [1, 2, 3];

const WorksPage = () => {
  return (
    <>
      <Header />
      <Works ids={ids} />
    </>
  );
};

export default WorksPage;
