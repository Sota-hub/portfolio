import Image from "next/image";

import classes from "../../styles/home.module.scss";

const Guide = ({ title, path }) => {
  return (
    <div className={classes.guide_container}>
      <h2 className={classes.guide_title}>{title}</h2>
      <div className={classes.guide_background_image}>
        <Image src={path} alt="about me link" layout="fill" />
      </div>
    </div>
  );
};

export default Guide;
