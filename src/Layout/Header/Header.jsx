import React from "react";
import { NavLink } from "react-router-dom";
import { header_nav } from "./header.module.css";
import style from './header.module.css'

const Header = () => {
  return (
    <div className={header_nav}>
      <nav className="container_div">
        <ul>
          <div className={style.header_part}>

          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>

          </div>
          <div className={style.header_part}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite</NavLink>
            </li>
          </div>

          <div  className={style.header_part}>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
            <li>
              <NavLink to="/signout">Sign Out</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
