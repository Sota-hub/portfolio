import Image from "next/image";

import classes from "../../styles/about.module.scss";

const Skill = ({ name, source }) => {
  return (
    <div className={classes.skill_align}>
      <div>
        <Image src={source} alt={name} width={100} height={100} />
        <p className={classes.text_style}>{name}</p>
      </div>
    </div>
  );
};

export default Skill;
