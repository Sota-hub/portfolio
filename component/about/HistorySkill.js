import HTML from "../../public/html-5.png";
import CSS from "../../public/css-3.png";
import JavaScript from "../../public/javascript.png";
import Git from "../../public/git.png";
import GitHub from "../../public/github.png";
import Sass from "../../public/sass.png";
import React from "../../public/react.png";
import Redux from "../../public/redux.png";
import Next from "../../public/nextjs.png";
import Node from "../../public/nodejs.png";
import Mongo from "../../public/mongodb.png";
import MySQL from "../../public/mysql.png";

import workPic from "../../public/aboutMe.jpg";

import Skill from "./Skill";
import History from "./History";
import classes from "../../styles/about.module.scss";

const skills = [
  {
    id: 1,
    name: "HTML",
    source: HTML,
  },
  {
    id: 2,
    name: "CSS",
    source: CSS,
  },
  {
    id: 3,
    name: "JavaScript",
    source: JavaScript,
  },
  {
    id: 4,
    name: "Git",
    source: Git,
  },
  {
    id: 5,
    name: "GitHub",
    source: GitHub,
  },
  {
    id: 6,
    name: "Sass",
    source: Sass,
  },
  {
    id: 7,
    name: "React",
    source: React,
  },
  {
    id: 8,
    name: "Redux",
    source: Redux,
  },
  {
    id: 9,
    name: "Next.js",
    source: Next,
  },
  {
    id: 10,
    name: "Node.js",
    source: Node,
  },
  {
    id: 11,
    name: "MongoDB",
    source: Mongo,
  },
  {
    id: 12,
    name: "MySQL",
    source: MySQL,
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
        "This app is able to play Pokemon on the browser. I created this app with a few people",
      points: ["Choose pokemon", "Decide move", "Change Pokemon", "Use Item"],
      // information for my work
      image: workPic,
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
      image: workPic,
      language: ["Next.js", "Node.js", "MySQL"],
      link: "https://poke-battle.netlify.app/",
    },
  },
];

const HistorySkill = () => {
  return (
    <div>
      <h2 className={classes.message}>Please take a look my history below.</h2>
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
      <h2 className={classes.message}>Please take a look my skills below. </h2>
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
