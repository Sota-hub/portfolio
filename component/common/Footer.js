import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <ul>
        <li className={classes.footer_list}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/">About</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/">Works</Link>
        </li>
        <li className={classes.footer_list}>
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div>
        <Image src="/GitHub_Logo.png" alt="GitHub link" layout="fill" />
      </div>
      <div>
        <Image src="/LI-Logo.png" alt="LinkedIn link" layout="fill" />
      </div>
    </div>
  );
};

export default Footer;
