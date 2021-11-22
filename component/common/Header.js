import Link from "next/link";
import { useRouter } from "next/router";

import classes from "../../styles/header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className={`container ${classes.header_container}`}>
        <h2 className={classes.header_icon}>{"Sota's portfolio"}</h2>
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
                (router.pathname === "/works" ||
                  router.pathname === "/works/pokemon" ||
                  router.pathname === "/works/bestfood") &&
                classes.active
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
      </div>
    </header>
  );
};

export default Header;
