import Link from "next/link";
import { useRouter } from "next/router";

import classes from "../../styles/header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className="container">
      <ul className={classes.grid_container}>
        <li
          className={`${classes.grid_items} ${
            router.pathname === "/" && classes.active
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${classes.grid_items} ${
            router.pathname === "/about" && classes.active
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${classes.grid_items} ${
            router.pathname === "/works" && classes.active
          }`}
        >
          <Link href="/works">Works</Link>
        </li>
        <li
          className={`${classes.grid_items} ${
            router.pathname === "/contact" && classes.active
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
