import React from "react";

import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import PostList from "./Post";

const Admpanel = () => {
  return (
    <>
      <header className={styles.admheader}>
        <img src={logo} />
      </header>
      <div className={styles.container}>
        <div className={styles.posts}>
          <PostList />
        </div>
        <div className={styles.review}>
          <div className={styles.block}>
            <div className={styles.title}>
              <p>Отзывы</p>
              <button className={styles.addPost}>+</button>
            </div>
            <div className={styles.box}>
              <p className={styles.namePost}>Название</p>
            </div>
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.block}>
            <div className={styles.title}>
              <p>Добавить товар в каталог</p>
              <button className={styles.addPost}>+</button>
            </div>
            <div className={styles.box}>
              <p className={styles.namePost}>Ivan A...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admpanel;
