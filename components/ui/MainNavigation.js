import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categories/BTC">简单的demo</Link>
        </li>
        <li>
          <Link href="/items/BTC">App dir相对完整的demo</Link>
        </li>
        <li>
          <Link href="/pageItems/BTC">Pages dir相对完整的demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
