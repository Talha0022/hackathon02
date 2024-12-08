import React  from "react";
import Image  from "next/image";
import Link   from "next/link";
import Frame1 from "@/app/public/Frame1.png";

export default function Header() {
    return (
        <>
            <header className = "header-container">
                {/* Top Links */}
                <div className = "top-links">
                    <ul className = "top-links-list">
                        <Link href = "/find-a-store"> <li> Find a Store </li> </Link>
                        <Link href = "/help        "> <li> Help         </li> </Link>
                        <Link href = "/join-us     "> <li> Join Us      </li> </Link>
                        <Link href = "/sign-in     "> <li> Sign In      </li> </Link>
                    </ul>
                </div>

                {/* Main Header */}
                <div className = "main-header">
                    {/* Logo */}
                    <div className = "logo-container">
                        <Image
                            className = "logo"
                            src       = {Frame1}
                            alt       = "Nike Logo"
                            layout    = "intrinsic" 
                            width     = {80} 
                            height    = {80} 
                        />
                    </div>

                    {/* Center: Navigation Menu */}
                    <nav className = "nav-menu">
                        <ul className = "menu-list">
                            <Link href = "/New&Featured "> <li> New & Featured </li> </Link>
                            <Link href = "/Men          "> <li> Men            </li> </Link>
                            <Link href = "/Women        "> <li> Women          </li> </Link>
                            <Link href = "/Kids         "> <li> Kids           </li> </Link>
                            <Link href = "/Sale         "> <li> Sale           </li> </Link>
                            <Link href = "/SNKRS        "> <li> SNKRS          </li> </Link>
                        </ul>
                    </nav>

                    {/* Right: Search Bar and Icons */}
                    <div className = "header-icons">
                        <div className = "search-bar">
                            <input type = "text" 
                                   placeholder = "Search" 
                                   className = "search-input" />
                        </div>
                        <button className = "icon-btn"> Favourite </button>
                        <button className = "icon-btn"> Cart      </button>
                    </div>
                </div>
            </header>
        </>
    );
}
