// import React  from "react";
// import Image  from "next/image";
// import Link   from "next/link";
// import Frame1 from "@/app/public/Frame1.png";
// import { FiHeart } from "react-icons/fi";
// import { IoBagOutline } from "react-icons/io5";
// import { IoIosSearch } from "react-icons/io";


// export default function Header() {
//     return (
//         <>
//             <header className = "header-container">
//                 {/* Top Links */}
//                 <div className = "top-links">
//                     <ul className = "top-links-list">
//                         <Link href = "/find-a-store"> <li> Find a Store </li> </Link>
//                         <Link href = "/help        "> <li> Help         </li> </Link>
//                         <Link href = "/join-us     "> <li> Join Us      </li> </Link>
//                         <Link href = "/sign-in     "> <li> Sign In      </li> </Link>
//                     </ul>
//                 </div>

//                 {/* Main Header */}
//                 <div className = "main-header">
//                     {/* Logo */}
//                     <div className = "logo-container">
//                         <Image
//                             className = "logo"
//                             src       = {Frame1}
//                             alt       = "Nike Logo"
//                             layout    = "intrinsic" 
//                             width     = {80} 
//                             height    = {80} 
//                         />
//                     </div>

//                     {/* Center: Navigation Menu */}
//                     <nav className = "nav-menu">
//                         <ul className = "menu-list">
//                             <Link href = "/New&Featured "> <li> New & Featured </li> </Link>
//                             <Link href = "/Men          "> <li> Men            </li> </Link>
//                             <Link href = "/Women        "> <li> Women          </li> </Link>
//                             <Link href = "/Kids         "> <li> Kids           </li> </Link>
//                             <Link href = "/Sale         "> <li> Sale           </li> </Link>
//                             <Link href = "/SNKRS        "> <li> SNKRS          </li> </Link>
//                         </ul>
//                     </nav>

//                     {/* Right: Search Bar and Icons */}
//                     <div className = "header-icons">
//                         <div className = "search-bar">
//                         <IoIosSearch className="search-icon" />
//                             <input type = "text" 
//                                    placeholder = "Search" 
//                                    className = "search-input" />
//                         </div>
//                         <button className = "icon-btn"> <FiHeart className="tow-icons" />        </button>
//                         <button className = "icon-btn"> <IoBagOutline className="tow-icons" />   </button>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame1 from "@/app/public/Frame1.png";
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
          <ul className={styles["top-links-list"]}>
            <Link href="/find-a-store">
              <li>Find a Store</li>
            </Link>
            <Link href="/help">
              <li>Help</li>
            </Link>
            <Link href="/join-us">
              <li>Join Us</li>
            </Link>
            <Link href="/sign-in">
              <li>Sign In</li>
            </Link>
          </ul>
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
              width={80}
              height={80}
            />
          </div>

          {/* Center: Navigation Menu */}
          <nav className={styles["nav-menu"]}>
            <ul className={styles["menu-list"]}>
              <Link href="/New&Featured">
                <li>New & Featured</li>
              </Link>
              <Link href="/Men">
                <li>Men</li>
              </Link>
              <Link href="/Women">
                <li>Women</li>
              </Link>
              <Link href="/Kids">
                <li>Kids</li>
              </Link>
              <Link href="/Sale">
                <li>Sale</li>
              </Link>
              <Link href="/SNKRS">
                <li>SNKRS</li>
              </Link>
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
