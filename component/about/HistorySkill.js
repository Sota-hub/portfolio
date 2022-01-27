import Skill from "./Skill";
import History from "./History";
import classes from "../../styles/about.module.scss";

import skills from "../../data/skills-data";
import histories from "../../data/history-data";

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
