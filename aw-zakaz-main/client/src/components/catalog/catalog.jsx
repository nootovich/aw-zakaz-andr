import React, { useState, useEffect } from "react";

const logo = "/static/logo.png";
import styles from "./styles.module.css"

const Catalog = () => {
  const [data, updateData] = useState([]);

  const navItems = () => {

    const items = localStorage.getItem("token") ? (
      <>
        <ul>
          <li>
            <a href="/catalog">Каталог</a>
          </li>
          <li>
            <a href="/posts">Статьи</a>
          </li>
          <li>
            <a href="/review">Отзывы</a>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
          </li>
          <li>
            <a href="/adm-panel">Панель</a>
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
          <a href="/catalog">Каталог</a>
        </li>
        <li>
          <a href="/posts">Статьи</a>
        </li>
        <li>
          <a href="/review">Отзывы</a>
        </li>
        <li>
          <a href="/contacts">Контакты</a>
        </li>
        <li>
          <a href="/login">Войти</a>
        </li>
      </ul>
    );

    return items;
  };

  const handleLengthDescription = (text) => {
    if (text.length > 27)
      text = text.substring(0, 35) + "..."
    return text;
  };

  const handleLengthName = (text) => {
    if (text.length > 15)
      text = text.substring(0, 14) + "..."
    return text;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}products`)
      const result = await response.json()
      updateData(result)
    }
    fetchData();
  }, []);
  
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Логотип" />
        <menu className={styles.mainHeaderNav}>{navItems()}</menu>
      </header>
      <div className={styles.container}>
        <div className={styles.items}>
          {data.map((product) => (
            <div className={styles.post}>
              <img src={product.image} alt="Изображение товара" />{" "}
              <div className={styles.priceBox}>
                <p>от {product.price}р.</p>
              </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName(`${product.name}`)}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(`${product.description}`)}
                </p>
                <button><a href={product.link}>Заказать</a></button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
