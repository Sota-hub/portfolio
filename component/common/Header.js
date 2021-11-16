import Link from "next/link";
import { useRouter } from "next/router";

import classes from "../../styles/header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className="container">
      <div className={classes.grid_container}>
        <Link href="/">
          <a
            className={`${classes.grid_items} ${
              router.pathname === "/" && classes.active
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${classes.grid_items} ${
              router.pathname === "/about" && classes.active
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/works">
          <a
            className={`${classes.grid_items} ${
              router.pathname === "/works" && classes.active
            }`}
          >
            Works
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`${classes.grid_items} ${
              router.pathname === "/contact" && classes.active
            }`}
          >
            Contact
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
