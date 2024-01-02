


import { NavLink } from "react-router-dom";
import style from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <div className={style.form}>
          <div className={style.header}>Register</div>
          <div className={style.field}>
            <input
              type="text"
              placeholder="Full Name"
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <input type="email" placeholder="Email" className={style.input} />
          </div>
          <div className={style.field}>
            <input
              type="password"
              placeholder="Password"
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <button className={style.button}>Register</button>
          </div>
          <div className={style.loginLink}>
            <span> Already have an account?{" "}
            
           <NavLink to={'/signin'}>Log In</NavLink>
          
            
            
          
              </span> 
          </div>
          <div className={style.googleBtn}>
            <button className={`${style.button} ${style.googleBtn}`}>
              Sign Up with Google
            </button>
          </div>
          <div className={style.githubBtn}>
            <button className={`${style.button} ${style.githubBtn}`}>
              Sign Up with GitHUb 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
