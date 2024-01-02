import React from "react";
import style from './Home.module.css'
import { NavLink } from "react-router-dom";
import Cards from "../../Components/Card/Cards";



const Home = () => {
  return (
    <>
    <div className={`${style.background} container_div`} >
      <div className={style.flex}>
        <div>
        <h1 className={style.rainbow_text}>Keep hardworking, take patients and  make yourself always ready for
            jobs</h1>
            <NavLink to={"/signup"}><button  className={style.button}>Explore Now</button></NavLink>
            <h2>Latest Job.</h2>
            <NavLink to={"/jobs"}><button  className={style.button}>Explore All Jobs</button></NavLink>
        </div>
        <div>
          <img
            src={"https://www.borealtrade.com/images/slider/home-01/03.jpg"}
            alt="img"
          />
        </div>
      </div>
    <Cards/>
      


     
    </div>
      
    </>
  );
};

export default Home;
