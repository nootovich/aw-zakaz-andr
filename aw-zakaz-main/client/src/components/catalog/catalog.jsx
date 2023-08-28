import React from "react";

import logo from "../../assets/logo.png";
import postImg from "../../assets/postImg.png"
import styles from "./styles.module.css"

const Catalog = () => {
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

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Логотип" />
        <menu className={styles.mainHeaderNav}>{navItems()}</menu>
      </header>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <img src={postImg} alt="Изображение статьи" />{" "}
            <div className={styles.priceBox}>
              <p>от 999 999 руб</p>
            </div>
            {/* position: relative */}
            <div className={styles.price}></div> {/* position: absolute */}
            <div className={styles.postInfo}>
              <p className={styles.name}>{handleLengthName("Название смолы бла бла бла")}</p>
              <div className={styles.description}>
                <p>
                  {handleLengthDescription(
                    "Тут какой-нибудь текст связанный со статьёй"
                  )}
                </p>
                <button>Заказать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
