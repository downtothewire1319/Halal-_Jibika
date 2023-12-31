import { FaApple } from "react-icons/fa";
import { FaGooglePlay, FaWindows } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook,FaTwitter,FaWhatsapp,FaInstagram  } from "react-icons/fa";

import style from "./Footer.module.css";
// import './Footer.module.css'

const Footer = () => {
  return (
    <>
      
      <div className={`${style.footer} container_div`} >
        <div className={style.footer_section}>
          <h3>HALAL JHIBIKA</h3>
          <p>
            “Keep hardworking, take patients and make yourself always ready for
            jobs”.
          </p>
         <span className={style.socialLink}><FaFacebook/> </span>
         <span className={style.socialLink}><FaTwitter/> </span>
         <span className={style.socialLink}><FaWhatsapp /> </span>
         <span className={style.socialLink}><FaInstagram /> </span>
        </div>
           <div className={style.footer_section}>

          <h3>Useful Link</h3>
          <ul>
            <li>About Us </li>
            <li>Services </li>
            <li>Browse Jobs </li>
            <li>Candidates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={style.footer_section}>
          <h3>Download</h3>

          <ul className="footerNav">
            <div className={style.footerNav}>
              <span>
                <FaApple />
              </span>
              <li> App Store</li>
            </div>

            <div className={style.footerNav}>
              <span>
                <FaGooglePlay />
              </span>
              <li> Google Play</li>
            </div>
            <div className={style.footerNav}>
              <span>
              <FaWindows />
              </span>
              <li>Windows</li>
            </div>
          </ul>
        </div>
        <div className={style.footer_section}>

          <h3>Contact</h3>
          <ul>
          <div className={style.footerNav}>
              <span>
              <FaWindows />
              </span>
              <li>Windows</li>
            </div>
            <div className={style.footerNav}>
              <span>
              <HiOutlineMail />
              </span>
              <li>test@gmail.com</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
