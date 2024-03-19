import React from "react";
const logo = "/static/logo.png";

import GetPosts from "./Post";
import styles from "./styles.module.css";

const Posts = () => {
  const navItems = () => {
    const items = localStorage.getItem("token") ? (
      <>
        <ul>
          <li>
            <a href='/catalog'>Каталог</a>
          </li>
          <li>
            <a href='/posts'>Статьи</a>
          </li>
          <li>
            <a href='/review'>Отзывы</a>
          </li>
          <li>
            <a href='/contacts'>Контакты</a>
          </li>
          <li>
            <a href='/adm-panel'>Панель</a>
          </li>
        </ul>
        <button
          className={styles.quit}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Выйти
        </button>
      </>
    ) : (
      <ul>
        <li>
          <a href='/catalog'>Каталог</a>
        </li>
        <li>
          <a href='/posts'>Статьи</a>
        </li>
        <li>
          <a href='/review'>Отзывы</a>
        </li>
        <li>
          <a href='/contacts'>Контакты</a>
        </li>
        <li>
          <a href='/login'>Войти</a>
        </li>
      </ul>
    );

    return items;
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt='Логотип' />
        <menu className={styles.mainHeaderNav}>{navItems()}</menu>
      </header>
      <div className={styles.container}>
        <div className={styles.items}>
          <GetPosts />
        </div>
      </div>
    </>
  );
};

export default Posts;
