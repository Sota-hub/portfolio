import Link from "next/link";
import Image from "next/image";

import Language from "./Language";
import classes from "../../styles/works.module.scss";

const Work = ({ language, title, description, image, link }) => {
  return (
    <Link href={link} passHref>
      <a target="blank" className={classes.Work_container}>
        <div className={classes.container_for_align}>
          <div className={classes.language_container}>
            <Language language={language} />
          </div>
          <h2 className={classes.title_style}>{title}</h2>
          <div className={classes.description_style}>{description}</div>
          <div className={classes.work_background_image}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              // priority
              quality={10}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Work;
