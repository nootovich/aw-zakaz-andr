import React, { useState } from "react";
import styles from "./styles.module.css";

import logo from "../../assets/logo.png";
import footer from "../../assets/footer.png";
import { auth } from "../../actions/admin";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleDefaultSettings = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className={styles.loginHeader}>
        <img src={logo}></img>
      </header>
      <div className={styles.container}>
        <form className={styles.loginForm} onSubmit={handleDefaultSettings}>
          <div className={styles.loginDatas}>
            <div className={styles.inputs}>
              <div className={styles.containerInput}>
                <p>Login</p>
                <input
                  type="text"
                  placeholder="Enter your login"
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className={styles.containerInput}>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className={styles.join} onClick={() => auth(login, password)}>Enter</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
