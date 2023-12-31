import React from "react";
import style from './About.module.css'

export const About = () => {
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
          <div>
            <h2>
              Millions of jobs. <br />
              Find the one that's right for you.
            </h2> 
            <p>Search all the open positions on the web. Get your own personalized salary <br /> estimate. Read reviews on over 30000+ companies worldwide.</p>
          <p><span></span>Digital Marketing Solutions for Tomorrow</p>
          <p>Our Talented & Experienced Marketing Agency</p>
          <p>Create your own skin to match your brand</p>
          </div>
        </div>
      </div>
    </div>
  );
};
