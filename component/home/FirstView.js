import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ResumeModal from "./ResumeModal";
import classes from "../../styles/home.module.scss";

const FirstView = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <h1 className={classes.fist_view_style}>
        I&prime;m Sota Sasaki. <br />
        I&prime;m into React and Next.js. <br />I can write the code anytime.{" "}
        <br /> It&prime;s time to hire me
      </h1>
      <div className="container" style={{ margin: "2em 0" }}>
        <Link href="https://github.com/Sota-hub">
          <a target="blank" className={classes.first_view_icon}>
            <Image
              src="/github.png"
              alt="GitHub link"
              width="35%"
              height="35%"
              quality={10}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/sota-sasaki-825478226/">
          <a target="blank" className={classes.first_view_icon}>
            <Image
              src="/linkedin.png"
              alt="LinkedIn link"
              width="35%"
              height="35%"
              quality={10}
            />
          </a>
        </Link>
      </div>
      <div className="container">
        <span
          className={classes.first_view_resume}
          onClick={() => setIsModal(true)}
        >
          Resume
        </span>
      </div>
      <p className={classes.arrow_style}>
        &darr; <span style={{ fontSize: "10px" }}>please scroll down</span>
      </p>
      {/* Modal */}
      {isModal && <ResumeModal setIsModal={setIsModal} />}
    </>
  );
};

export default FirstView;
