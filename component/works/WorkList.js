import Work from "./Work";
import classes from "../../styles/works.module.scss";

import PokemonImageBattle from "../../public/poke_battle.png";
import myMenu from "../../public/my-menu.png";
import Koremo from "../../public/koremo.png"

const WorkList = () => {
  return (
    <div className="container">
      <div>
        <h2 className={classes.WorkList_title}>
          These are my works! Please take a look them.
        </h2>
        <div className={classes.WorkList_container}>
          <Work
            key="koremo"
            title="Koremo"
            image={Koremo}
            params="koremo"
          />
          <Work
            key="best-dish"
            title="BEST DISH"
            image={myMenu}
            params="bestdish"
          />
          <Work
            key="pokemon-battle"
            title="Pokemon Battle"
            image={PokemonImageBattle}
            params="pokemon"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
