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
    period: "- 2021",
    description: {
      title: "Before coming to Vancouver",
      describe: "I was a university student and a part-timer",
      points: [
        "Salesperson in grocery store",
        "Salesperson in Japanese style pub",
        "employee in Japanese style hotel",
        "Website content writer",
        "I'd been specializing sociology",
      ],
    },
  },
  {
    id: 2,
    period: "2021 -",
    description: {
      title: "I enrolled in CICCC",
      describe: "I'm specializing web development",
      points: ["Algorithm", "HTML & CSS", "JavaScript", "Java"],
    },
  },
  {
    id: 3,
    period: "2021",
    description: {
      title: "I did volunteer",
      describe: "I helped an art event",
      points: ["Venue setup", "Reception"],
    },
  },
  {
    id: 4,
    period: "2021",
    description: {
      title: "Pokemon Battle App",
      describe:
        "This app is able to play Pokemon on browser. I created this app with a few people",
      points: ["Choose pokemon", "Decide move", "Change Pokemon", "Use Item"],
      // information for my work
      image: "/aboutMe.jpg",
      language: ["React", "Redux", "JS"],
      link: "https://poke-battle.netlify.app/",
    },
  },
  {
    id: 5,
    period: "2021",
    description: {
      title: "BESTFOOD",
      describe: "This app is able to create the ranking of favorite dishes",
      points: [
        "Share favorite dishes",
        "Suggest new restaurants on the basis of the dishes which is share by similar taste user for user",
        "I'm going to create an actual restaurants menu by user information (dish name, location, price, etc...)",
      ],
      // information for my work
      image: "/aboutMe.jpg",
      language: ["Next.js", "Node.js", "MySQL"],
      link: "https://poke-battle.netlify.app/",
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
