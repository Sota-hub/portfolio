import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <ul className={classes.footer_list_container}>
        <li className={classes.footer_list}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/about">About</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/works">Works</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={classes.footer_image_container}>
        <Link href="https://github.com/Sota-hub">
          <a target="blank" className={classes.image_style}>
            <Image
              src="/GitHub-icon.png"
              alt="GitHub link"
              width="35%"
              height="35%"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/sota-sasaki-825478226/">
          <a target="blank" className={classes.image_style}>
            <Image
              src="/LinkedIn-icon.png"
              alt="LinkedIn link"
              width="20%"
              height="20%"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
