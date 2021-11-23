import { forwardRef } from "react";
import Image from "next/image";

import classes from "../../styles/home.module.scss";

const Guide = forwardRef(({ title, path, href, onClick }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={classes.guide_container}
    >
      <h2 className={classes.guide_title}>{title}</h2>
      <div className={classes.guide_background_image}>
        <Image
          src={path}
          alt={`${title.toLowerCase()}-link`}
          quality={10}
          layout="fill"
        />
      </div>
    </a>
  );
});

Guide.displayName = "Guide";

export default Guide;
