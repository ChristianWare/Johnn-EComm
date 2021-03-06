import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/'>
            <h1>
            JW
            </h1>
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + " " + styles.active
          }
          onClick={openMenu}
        >
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about'>
              <a onClick={openMenu}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#disney"}>
              <a onClick={openMenu}>Disney</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#paramount"}>
              <a onClick={openMenu}>Paramount</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#peacock"}>
              <a onClick={openMenu}>Peacock</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#leaving"}>
              <a onClick={openMenu}>Leaving</a>
            </Link>
          </li>
        </ul>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
