import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies()
const logo = "/static/logo.png";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [isauthenticated, setauthenticated] = useState(false);
  const navigate = useNavigate();

  const getSession = () => {
    fetch("/api/session", {
    credentials:"same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.isauthenticated) {
        setauthenticated(true)
      } else {
        setauthenticated(false)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  }
  
  const handleUserNameChange = (event) => {
    setusername(event.target.value);
  }

  const isResponseOk = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  const login = (event) => {
    event.preventDefault(); 
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({username: username, password: password}),
    })
    .then(isResponseOk)
    .then((data) => {
      setusername("")
      setpassword("")
      seterror("")
      setauthenticated(true)
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
      seterror("Неверный логин или пароль.");
    });
  }
  
  getSession();
  return (
    <>
      <header className={styles.loginHeader}>
        <img src={logo}></img>
      </header>
      <div className={styles.container}>
        <form className={styles.loginForm} onSubmit={login}>
          <div className={styles.loginDatas}>
            <div className={styles.inputs}>
              <div className={styles.containerInput}>
                <p>Login</p>
                <input
                  type="text"
                  placeholder="Enter your login"
                  id="username"
                  name="username"
                  value={username} 
                  onChange={handleUserNameChange}
                />
              </div>
              <div className={styles.containerInput}>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  name="password" 
                  value={password}
                  onChange={handlePasswordChange} 
                />
              </div>
              <div>
              {error &&
                <small className="text-danger">
                  {error}
                </small>
              }
            </div>
            </div>
            <button type="submit" className={styles.join} >Enter</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
