import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/about.module.scss";
import Language from "../works/Language";

const History = ({ period, description }) => {
  return (
    <div className={classes.history_container}>
      <p className={classes.history_period}>{period}</p>
      <div className={classes.history_description}>
        <h2 className={classes.history_title}>{description.title}</h2>
        <p className={classes.history_describe}>{description.describe}</p>
        <ul className={classes.history_points}>
          {description.points.map((point, index) => (
            <li key={`point-${index}`} className={classes.history_point}>
              {point}
            </li>
          ))}
        </ul>
        {description.image && (
          <div className={classes.work_container}>
            <div className={classes.history_image}>
              <Image src={description.image} alt="image" layout="fill" />
            </div>
            <Link href={description.link}>
              <a target="blank" className={classes.history_button}>
                Visit
              </a>
            </Link>
            <div className={classes.history_language}>
              <p>Languages</p>
              <Language language={description.language} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
