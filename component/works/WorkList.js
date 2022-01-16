import AboutMe from "../../public/aboutMe.jpg";

import Work from "./Work";
import classes from "../../styles/works.module.scss";
import PokemonImageBattle from "../../public/poke_battle.png";

const works = [
  {
    id: 1,
    title: "Pokemon Battle",
    image: PokemonImageBattle,
    params: "/pokemon",
  },
  {
    id: 2,
    title: "Meal Menu",
    image: AboutMe,
    params: "/bestfood",
  },
];

const WorkList = () => {
  return (
    <div className="container">
      <div>
        <h2 className={classes.WorkList_title}>
          These are my works! Please take a look them.
        </h2>
        <div className={classes.WorkList_container}>
          {works.map((work) => (
            <Work
              key={`work-${work.id}`}
              title={work.title}
              image={work.image}
              params={work.params}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkList;
