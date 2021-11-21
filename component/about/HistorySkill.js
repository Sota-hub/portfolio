import Skill from "./Skill";
import History from "./History";

import classes from "../../styles/about.module.scss";

const skills = [
  {
    id: 1,
    name: "HTML",
    source: "/html-5.png",
  },
  {
    id: 2,
    name: "CSS",
    source: "/css-3.png",
  },
  {
    id: 3,
    name: "JavaScript",
    source: "/javascript.png",
  },
  {
    id: 4,
    name: "Git",
    source: "/git.png",
  },
  {
    id: 5,
    name: "GitHub",
    source: "/github.png",
  },
  {
    id: 6,
    name: "Sass",
    source: "/sass.png",
  },
  {
    id: 7,
    name: "React",
    source: "/react.png",
  },
  {
    id: 8,
    name: "Redux",
    source: "/redux.png",
  },
  {
    id: 9,
    name: "Next.js",
    source: "/nextjs.png",
  },
  {
    id: 10,
    name: "Node.js",
    source: "/nodejs.png",
  },
  {
    id: 11,
    name: "MongoDB",
    source: "/mongodb.png",
  },
  {
    id: 12,
    name: "MySQL",
    source: "/mysql.png",
  },
];

const histories = [
  {
    id: 1,
    period: "- 2020",
    description: {
      title: "Before coming to Vancouver",
      describe: "I was a university student and a part-timer",
      points: [
        "Salesperson in grocery store",
        "Salesperson in Japanese style pub",
        "employee in Japanese style hotel",
        "Website content writer",
        "I've been specializing sociology",
      ],
      image: "",
    },
  },
];

const HistorySkill = () => {
  return (
    <div>
      <div className={classes.history_frame}>
        <div>
          {histories.map((history) => (
            <History
              key={`history-${history.id}`}
              id={history.id}
              period={history.period}
              description={history.description}
            />
          ))}
        </div>
      </div>
      <div className={classes.skills_container}>
        {skills.map((skill) => (
          <Skill
            key={`skill-${skill.id}`}
            name={skill.name}
            source={skill.source}
          />
        ))}
      </div>
    </div>
  );
};

export default HistorySkill;
