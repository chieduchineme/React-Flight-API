import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFormComponent.css";
import styles  from './login.module.css'
import { withLayout } from "../HOC.js/hoc";
import OpenSkyIcon from "../../assets/images/opensky_logo.png";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // on submit validate the input
    if (email === "") {
      setError({ error: true, message: "email can not be empty" });
      return;
    }
    setError({
      error: false,
      message: "",
    });
    if (password === "") {
      setError({ error: true, message: "password can not be empty" });
      return;
    }
    setError({
      error: false,
      message: "",
    });
    console.log("handelSubmit", email, password);
    setEmail("")
    navigate("/dashboard");
  };
   return (
      <>
              <div className={styles.parent}>
                  <div>
                      <div className={styles.backgroundImage}/>
                  </div>
                  <div className={styles.formparent}>                       
                      <div className={styles.welcome}>Welcome!</div>
                      <div className={styles.submessage}>Enter details to login.</div> 

                      <form>
                        {error.error ? (
                              <div className="alert alert-danger">{error.message}</div>
                            ) : null}
                          <img src={OpenSkyIcon} alt="OpenSkyIcon"  className={styles.openskylogo}/>
                          <div className={styles.input}>
                            <input onChange={e => setEmail(e.target.value)} value={email} className={styles.placeholder} placeholder='Email'/>
                          </div>
                          <div className={styles.input}>
                            <input type='password' onChange={e => setPassword(e.target.value)}  value={password} className={styles.placeholder} placeholder='Password' autoComplete="on" />
                          </div>
                          <div className={styles.forgotpassword}>FORGOT PASSWORD?</div>
                      </form>
                      <button disabled={email==='' || password===''} className={styles.button} onClick={handleSubmit}>LOG IN</button>
                  </div>
              </div>
      </>
  );
};

export default withLayout(LoginFormComponent);
