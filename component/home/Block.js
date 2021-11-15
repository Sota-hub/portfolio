import Link from "next/link";

import classes from "../../styles/block.module.scss";

const Block = ({ block }) => {
  return (
    <div className="container">
      <div className={classes.block_container}>
        <p>{block.title}</p>
        <ul>
          <li className={classes.link_container}>
            <Link href={block.linkName}>{block.linkName.toUpperCase()}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Block;
