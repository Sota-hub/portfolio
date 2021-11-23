import { useState } from "react";
import Image from "next/image";
import GitHubIcon from "../../public/github.png";
import LinkedInIcon from "../../public/linkedin.png";

import ResumeModal from "./ResumeModal";
import classes from "../../styles/home.module.scss";

const FirstView = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <h1 className={classes.fist_view_style}>
        Hello! <br />
        I&prime;m Sota Sasaki. <br />
        I&prime;m into React and Next.js! <br />I can write the code anytime.
      </h1>
      <div className="container" style={{ margin: "2em 0" }}>
        <a
          href="https://github.com/Sota-hub"
          target="blank"
          className={classes.first_view_icon}
        >
          <Image src={GitHubIcon} alt="GitHub link" quality={10} />
        </a>
        <a
          href="https://www.linkedin.com/in/sota-sasaki-825478226/"
          target="blank"
          className={classes.first_view_icon}
        >
          <Image src={LinkedInIcon} alt="LinkedIn link" quality={10} />
        </a>
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
