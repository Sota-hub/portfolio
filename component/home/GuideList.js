import Link from "next/link";

import Guide from "./Guide";
import classes from "../../styles/home.module.scss";

const GuideList = () => {
  return (
    <div className="container">
      <ul className={classes.guideList_container}>
        <p className={classes.message_style}>Are you interested in me?</p>
        <li className={classes.link_container}>
          <Link href="/about" passHref>
            <a>
              <Guide title="ABOUT ME" path="/aboutMe.jpg" />
            </a>
          </Link>
        </li>
        <p className={classes.message_style}>
          NOT interested in me? -<br /> Please see my works at least!
        </p>
        <li className={classes.link_container}>
          <Link href="/works" passHref>
            <a>
              <Guide title="WORKS" path="/works.jpg" />
            </a>
          </Link>
        </li>
        <p className={classes.message_style}>
          Is it the time to hire me already?
        </p>
        <li className={classes.link_container}>
          <Link href="/contact" passHref>
            <a>
              <Guide title="CONTACT" path="/contact.jpg" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GuideList;
