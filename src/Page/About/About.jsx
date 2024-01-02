
import style from "./About.module.css";
import { useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FaConciergeBell, FaReact } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container_div">
      <div className={style.heroSection}>
        <div>
          <img
            src="https://jobstack-react.vercel.app/static/media/ab05.a7fa93ab5b124c959a1e.jpg"
            alt="image "
          />
        </div>
        <div>
          <div className={style.heroSectionRightSide}>
            <h2>
              Millions of jobs. <br />
              Find the one that's right for you.
            </h2>
            <p>
              Search all the open positions on the web. Get your own
              personalized salary <br /> estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
            <br />
            <p>
              <span></span>Digital Marketing Solutions for Tomorrow
            </p>
            <p>Our Talented & Experienced Marketing Agency</p>
            <p>Create your own skin to match your brand</p>

            <button
              onClick={() => navigate("/contact")}
              className={`${style.button} commonButton`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className={style.heroMiddle}>
        <h2> Here's why you'll love it Halal Jibika</h2>
        <p>
          Search all the open positions on the web. Get your own personalized
          salary <br /> estimate. Read reviews on over 30000+ companies
          worldwide.
        </p>
      </div>
      <div className={style.whyHalal}>

        <div className={style.childwhyHalal}>
          <span><IoCallOutline/> </span>
          <h3>24/7 Support</h3>
          <p>Many desktop publishing <br /> now use and a search for job</p>
          <p>Read More </p>

        </div>
        <div className={style.childwhyHalal}>
          <span><FaReact/> </span>
          <h3>Tech & Startup Jobs</h3>
          <p>Many desktop publishing <br /> now use and a search for job</p>
          <p>Read More </p>

        </div>
        <div className={style.childwhyHalal}>
          <span><FaConciergeBell/> </span>
          <h3>Quick & Easy</h3>
          <p>Many desktop publishing <br /> now use and a search for job</p>
          <p>Read More </p>

        </div>
        <div className={style.childwhyHalal}>
          <span><CiFilter/> </span>
          <h3>Save Time</h3>
          <p>Many desktop publishing <br /> now use and a search for job</p>
          <p>Read More </p>

        </div>


      </div>
    </div>
  );
};
