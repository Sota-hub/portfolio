import Image from "next/image";

import classes from "../../styles/about.module.scss";

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
          <>
            <div className={classes.history_image}>
              <Image src={description.image} alt="image" />
            </div>
            <span className={classes.history_button}>Visit</span>
          </>
        )}
      </div>
    </div>
  );
};

export default History;
