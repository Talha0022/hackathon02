import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-column']}>
          <ul className={styles['footer-column-ul']}>
             <li> <Link href="/"> FIND A STORE      </Link> </li>      
             <li> <Link href="/"> BECOME A MEMBER   </Link> </li>   
             <li> <Link href="/"> SIGN UP FOR EMAIL </Link> </li> 
             <li> <Link href="/"> Send Us Feedback  </Link> </li>  
             <li> <Link href="/"> STUDENT DISCOUNTS </Link> </li> 
          </ul>
        </div>
        <div className={styles['footer-column']}>
          <h4>GET HELP</h4>
          <ul className={styles['footer-column-ul']}>
            <Link href="/"><li>Order Status</li></Link>
            <Link href="/"><li>Delivery</li></Link>
            <Link href="/"><li>Returns</li></Link>
            <Link href="/"><li>Payment Options</li></Link>
            <Link href="/"><li>Contact Us On Nike.com Inquiries</li></Link>
            <Link href="/"><li>Contact Us On All Other Inquiries</li></Link>
          </ul>
        </div>
        <div className={styles['footer-column']}>              
          <h4>ABOUT NIKE</h4>
          <ul className={styles['footer-column-ul']}>
            <Link href="/"><li>News</li></Link>
            <Link href="/"><li>Careers</li></Link>
            <Link href="/"><li>Investors</li></Link>
            <Link href="/"><li>Sustainability</li></Link>
          </ul>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div className="grid grid-flow-col gap-4">
            <AiFillTwitterCircle     className="w-[40px] h-[40px] fill-#7e7e7e hover:fill-blue-700"/>
            <BsFacebook              className="w-[34px] h-[34px] fill-#7e7e7e hover:fill-blue-700"/>
            <TiSocialYoutubeCircular className="w-[45px] h-[45px] fill-#7e7e7e hover:fill-blue-700"/>
            <ImInstagram             className="w-[29px] h-[29px] fill-#7e7e7e hover:fill-blue-700"/>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className={styles['footer-bottom-1']}>  
          <FaLocationDot />
          <p>Pakistan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &copy;  2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div>
          <ul className={styles['footer-links']}>
            <Link href="/"><li>Guides</li></Link>
            <Link href="/"><li>Terms of Sale</li></Link>
            <Link href="/"><li>Terms of Use</li></Link>
            <Link href="/"><li>Nike Privacy Policy</li></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
