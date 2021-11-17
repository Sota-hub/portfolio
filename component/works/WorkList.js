import Work from "./Work";
import classes from "../../styles/works.module.scss";

const works = [
  {
    id: 1,
    language: ["react", "redux", "Js"],
    title: "Pokemon Battle",
    description: "This is a pokemon game",
    image: "/aboutMe.jpg",
    link: "https://poke-battle.netlify.app/",
  },
  {
    id: 2,
    language: ["Next.js", "node", "MySQL"],
    title: "Meal Menu",
    description: "This is a Meal Menu",
    image: "/works.jpg",
    link: "https://poke-battle.netlify.app/",
  },
];

const WorkList = () => {
  return (
    <div className="container">
      <div className={classes.WorkList_container}>
        {works.map((work) => (
          <Work
            key={`work-${work.id}`}
            language={work.language}
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
