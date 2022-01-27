import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/works.module.scss";

const Work = ({ title, image, params }) => {
  return (
    <div className={classes.Work_container}>
      <div className={classes.container_for_align}>
        <h2 className={classes.title_style}>{title}</h2>
        <div className={classes.description_style}>
          <Link href={`/works/${params}`}>More Info</Link>
        </div>
        <div className={classes.work_background_image}>
          <Image src={image} alt={title} layout="fill" quality={10} />
        </div>
      </div>
    </div>
  );
};

export default Work;
