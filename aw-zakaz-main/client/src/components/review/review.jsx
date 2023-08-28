import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import circle from "../../assets/круг.png";
import { useNavigate } from "react-router-dom";

const Review = () => {
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
          <h1 className={styles.allreview}>Отзывы наших покупателей</h1>
          <div className={styles.box}>
            <div className={styles.info}>
              <img src = {circle} />
              <span className={styles.nameperson}>Ivan A.A.</span>
              <span className={styles.data}>01.07.2023</span>
            </div>
            <div className={styles.place}>
              Положительный отзыв
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.info}>
              <img src = {circle} />
              <span className={styles.nameperson}>Ivan A.A.</span>
              <span className={styles.data}>01.07.2023</span>
            </div>
            <div className={styles.place}>
              Положительный отзыв
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.info}>
              <img src = {circle} />
              <span className={styles.nameperson}>Ivan A.A.</span>
              <span className={styles.data}>01.07.2023</span>
            </div>
            <div className={styles.place}>
              Положительный отзыв
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review