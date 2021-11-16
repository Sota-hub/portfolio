import Skill from "./Skill";

import classes from "../../styles/about.module.scss";

const skills = [
  {
    name: "HTML",
    source: "/html-5.png",
  },
  {
    name: "CSS",
    source: "/css-3.png",
  },
  {
    name: "JavaScript",
    source: "/javascript.png",
  },
  {
    name: "Git",
    source: "/git.png",
  },
  {
    name: "GitHub",
    source: "/github.png",
  },
  {
    name: "Sass",
    source: "/sass.png",
  },
  {
    name: "React",
    source: "/react.png",
  },
  {
    name: "Redux",
    source: "/redux.png",
  },
  {
    name: "Next.js",
    source: "/nextjs.png",
  },
  {
    name: "Node.js",
    source: "/nodejs.png",
  },
  {
    name: "MongoDB",
    source: "/mongodb.png",
  },
  {
    name: "MySQL",
    source: "/mysql.png",
  },
];

const SkillList = () => {
  return (
    <div className="container">
      <div className={classes.skills_container}>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} source={skill.source} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
