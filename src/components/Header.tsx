import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame1 from "../../public/Frame1.png";
import Frame from "../../public/Frame.png";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import styles from "./header.module.css"; // Import the CSS module

export default function Header() {
  return (
    <>
      <header className={styles["header-container"]}> {/* Use CSS module class */}
        {/* Top Links */}
        <div className={styles["top-links"]}>
          <div>
            <Image
                className={styles["top-image"]}
                src={Frame}
                alt="Image"
                width={24}
                height={24}
            />
          </div>
          <div className={styles["top-link"]} >
            <ul className={styles["top-links-list"]}>
              <Link href="/" className={styles.find}>  <li>Find a Store  </li></Link>
              <Link href="/" className={styles.find}>  <li>Help          </li></Link>
              <Link href="/" className={styles.find}>  <li>Join Us       </li></Link>
              <Link href="/">                          <li>Sign In       </li></Link>
            </ul>
          </div>
        </div>

        {/* Main Header */}
        <div className={styles["main-header"]}>
          {/* Logo */}
          <div className={styles["logo-container"]}>
            <Image
              className={styles.logo} // Use CSS module class for logo
              src={Frame1}
              alt="Nike Logo"
              layout="intrinsic"
              width={70}
              height={80}
            />
          </div>

          {/* Center: Navigation Menu */}
          <nav className={styles["nav-menu"]}>
            <ul className={styles["menu-list"]}>
              <Link href="/New&Featured"><li>New & Featured</li></Link>
              <Link href="/Men">          <li>Men</li></Link>
              <Link href="/Women">        <li>Women</li></Link>
              <Link href="/Kids">         <li>Kids</li></Link>
              <Link href="/Sale">         <li>Sale</li></Link>
              <Link href="/SNKRS">        <li>SNKRS</li></Link>
            </ul>
          </nav>

          {/* Right: Search Bar and Icons */}
          <div className={styles["header-icons"]}>
            <div className={styles["search-bar"]}>
              <IoIosSearch className={styles["search-icon"]} />
              <input
                type="text"
                placeholder="Search"
                className={styles["search-input"]}
              />
            </div>
            <button className={styles["icon-btn"]}>
              <FiHeart className={styles["tow-icons"]} />
            </button>
            <button className={styles["icon-btn"]}>
              <IoBagOutline className={styles["tow-icons"]} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
