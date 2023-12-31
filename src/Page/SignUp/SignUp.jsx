// SignUpForm.js


import style from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.form}>
        <div className={style.header}>Register</div>
        <div className={style.field}>
          <input type="text" placeholder="Full Name" className={style.input} />
        </div>
        <div className={style.field}>
          <input type="email" placeholder="Email" className={style.input} />
        </div>
        <div className={style.field}>
          <input type="password" placeholder="Password" className={style.input} />
        </div>
        <div className={style.field}>
          <input type="password" placeholder="Confirm Password" className={style.input} />
        </div>
        <div className={style.field}>
          <button className={style.button}>Register</button>
        </div>
        <div className={style.loginLink}>
          Already have an account? <a href="#" className={style.link}>Login in</a>
        </div>
        <div className={style.googleBtn}>
          <button className={`${style.button} ${style.googleBtn}`}>Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
