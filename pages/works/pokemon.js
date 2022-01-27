import WorkDetail from "../../component/works/WorkDetail";
import dataOfPokemon from "../../data/pokemon-data";

const pokemon = () => {
  return <WorkDetail data={dataOfPokemon} />;
};

export default pokemon;
