import Link from "next/link";
import AboutMe from "../../public/aboutMe.jpg";
import Works from "../../public/works.jpg";
import Contact from "../../public/contact.jpg";

import FirstView from "./FirstView";
import Guide from "./Guide";
import classes from "../../styles/home.module.scss";

const GuideList = () => {
  return (
    <div>
      <div className={classes.first_view_container}>
        <FirstView />
      </div>
      <div className="container">
        <ul className={classes.guideList_container}>
          <div className={classes.vertical_grid}>
            <p className={classes.message_style}>Are you interested in me?</p>
            <li className={classes.link_container}>
              <Link href="/about" passHref>
                <Guide title="ABOUT ME" path={AboutMe} />
              </Link>
            </li>
          </div>
          <div className={classes.vertical_grid}>
            <p className={classes.message_style}>
              Please see my works at least!
            </p>
            <li className={classes.link_container}>
              <Link href="/works" passHref>
                <Guide title="WORKS" path={Works} />
              </Link>
            </li>
          </div>
          <div className={classes.vertical_grid}>
            <p className={classes.message_style}>
              Is it the time to hire me already?
            </p>
            <li className={classes.link_container}>
              <Link href="/contact" passHref>
                <Guide title="CONTACT" path={Contact} />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GuideList;
