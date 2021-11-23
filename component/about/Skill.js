import Image from "next/image";

import classes from "../../styles/about.module.scss";

const Skill = ({ name, source }) => {
  return (
    <div className={classes.skill_align}>
      <div>
        <div className={classes.skill_image}>
          <Image src={source} alt={name} quality={10} />
        </div>
        <p className={classes.text_style}>{name}</p>
      </div>
    </div>
  );
};

export default Skill;
