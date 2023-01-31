import Image from "next/image";

import classes from "../../styles/about.module.scss";
import Language from "../about/Language";

const History = ({ id, period, description }) => {
  return (
    <div className={classes.history_container}>
      <p className={classes.history_period}>{period}</p>
      <div>
        <h2 className={classes.history_title}>{description.title}</h2>
        <p className={classes.history_describe}>{description.describe}</p>
        <ul className={classes.history_points}>
          {description.points.map((point, index) => (
            <li key={`point-${index}`} className={classes.history_point}>
              {point}
            </li>
          ))}
        </ul>
          <div>
        {description.image && (
            <div className={classes.history_image}>
              <Image src={description.image} alt={`image-${id}`} quality={10} />
            </div>
        )}
        {description.link && (
          <a
          href={description.link}
          target="blank"
          className={classes.history_button}
          >
              Visit
            </a>
        )}
        {description.language && (
          <div className={classes.history_language}>
              <p>Languages</p>
              <Language language={description.language} />
            </div>
        )}
          </div>
      </div>
      <div className={classes.history_bottom}></div>
      <span className={classes.line_dot}></span>
    </div>
  );
};

export default History;
