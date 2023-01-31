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
      <div className={classes.first_view_separate}>
        <div>
          <h1 className={classes.fist_view_style}>
            <p className={classes.fist_view_text}>
            Hello! My name is Sota and I'm a front-end developer with extensive knowledge of full-stack development. I worked as a full-stack developer for 5+ months and grew rapidly by learning new plenty of skills. I enjoy collaborating with peers and acquiring new technology for better products.
            </p>
          </h1>
        </div>
        <div className={classes.first_view_right}>
          <div>
            <div
              className={`container ${classes.right_contents}`}
              style={{ margin: "2em 0" }}
            >
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
            <div className={`container ${classes.right_contents}`}>
              <span
                className={classes.first_view_resume}
                onClick={() => setIsModal(true)}
              >
                Download Resume
              </span>
            </div>
          </div>
        </div>
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
