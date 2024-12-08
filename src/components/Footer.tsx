import React from 'react';
import Link from 'next/link';


export default function Footer () {
    return (
        <footer className = "footer">
          <div className = "footer-container">
            <div className = "footer-column">
              <ul>  
                <Link href = "/" > <li> FIND A STORE      </li> </Link>
                <Link href = "/" > <li> BECOME A MEMBER   </li> </Link>
                <Link href = "/" > <li> SIGN UP FOR EMAIL </li> </Link>
                <Link href = "/" > <li> Send Us Feedback  </li> </Link>
                <Link href = "/" > <li> STUDENT DISCOUNTS </li> </Link>
              </ul>
            </div>
            <div className = "footer-column">
              <h4> GET HELP </h4> 
              <ul className="footer-column-ul" >
                <Link href = "/" > <li> Order Status                      </li> </Link>
                <Link href = "/" > <li> Delivery                          </li> </Link>
                <Link href = "/" > <li> Returns                           </li> </Link>
                <Link href = "/" > <li> Payment Options                   </li> </Link>
                <Link href = "/" > <li> Contact Us On Nike.com Inquiries  </li> </Link>
                <Link href = "/" > <li> Contact Us On All Other Inquiries </li> </Link>
              </ul>
            </div>
            <div className="footer-column">
              <h4>ABOUT NIKE</h4>
              <ul className="footer-column-ul" >
                <Link href = "/" > <li> News           </li> </Link>
                <Link href = "/" > <li> Careers        </li> </Link>
                <Link href = "/" > <li> Investors      </li> </Link>
                <Link href = "/" > <li> Sustainability </li> </Link>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>India </p>
            <p className="footer-column-ul" > &copy;  2023 Nike, Inc. All Rights Reserved </p>
            <ul className="footer-links">
              <Link href = "/" > <li> Guides              </li> </Link>
              <Link href = "/" > <li> Terms of Sale       </li> </Link>
              <Link href = "/" > <li> Terms of Use        </li> </Link>
              <Link href = "/" > <li> Nike Privacy Policy </li> </Link>
            </ul>
            <div className="footer-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </footer>     
  );
};


