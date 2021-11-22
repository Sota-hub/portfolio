import Work from "./Work";
import classes from "../../styles/works.module.scss";

const works = [
  {
    id: 1,
    title: "Pokemon Battle",
    image: "/aboutMe.jpg",
    params: "/pokemon",
  },
  {
    id: 2,
    title: "Meal Menu",
    image: "/works.jpg",
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
