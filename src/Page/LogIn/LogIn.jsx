
import { NavLink } from 'react-router-dom';
import style from './LogIn.module.css';

const LogIn = () => {
  return (
    <div className={style.formWrapper}> 
    <div className={style.formContainer}>
      <div className={style.form}>
        <div className={style.header}>Login</div>
        <div className={style.field}>
          <input type="email" placeholder="Email" className={style.input} />
        </div>
        <div className={style.field}>
          <input type="password" placeholder="Password" className={style.password} />
        </div>
        <div className={style.formLink}>
          <a href="#" className={style.forgotPass}>Forgot password?</a>
        </div>
        <div className={style.field}>
          <button className={style.button}>Login</button>
        </div>
        <div className={style.formLink}>
            <span> Don't have an account?{' '}</span>
            <NavLink to={'/signup'} >Sign Up</NavLink>
         
        </div>
        <div className={style.mediaOptions}>
          <a href="#" className={`${style.field} ${style.facebook}`}>
            <i className='bx bxl-facebook'></i>
            <span>Login with Facebook</span>
          </a>
          <a href="#" className={`${style.field} ${style.google}`}>
            <i className='bx bxl-google'></i>
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
    
    </div>

    
  );
}

export default LogIn;
