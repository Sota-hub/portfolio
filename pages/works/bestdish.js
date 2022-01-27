import dataOfBestDish from "../../data/best-dish-data";
import WorkDetail from "../../component/works/WorkDetail";

const bestdish = () => {
  return <WorkDetail data={dataOfBestDish} />;
};

export default bestdish;
