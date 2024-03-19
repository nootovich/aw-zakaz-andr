import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";

const logo = "/static/logo.png";
const bottle = "/static/header-bottle.png";
const downloadDoc = "/static/download-doc.png";
const phone = "/static/phone.png";
const mail = "/static/mail.png";
const human = "/static/human.png";
const location = "/static/location.png"
const calendar = "/static/calendar.png";

const Main = () => {
  const navigate = useNavigate();

  const handleNavigateToMain = () => {
    navigate("/");
  };

  const handleDefaultSettings = (e) => {
    e.preventDefault();
  };

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
          className={style.quit}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
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

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.header}>
          <img src={logo} onClick={handleNavigateToMain} alt="Логотип" />
          <menu className={style.mainHeaderNav}>{navItems()}</menu>
        </div>
        <div className={style.mainHeaderPage}>
          <img src={bottle} alt="Картинка бутылки" className={style.bottle} />
          <div className={style.HeadermainPageText}>
            <h1>ЭПОКСИДНАЯ СМОЛА</h1>
            <p>ДЛЯ СТОЛЕШНИЦ И ОБЪЁМНЫХ ЗАЛИВОК</p>
            <ul>
              <li>
                <p>Кристальная прозрачность</p>
              </li>
              <li>
                <p>Пропорции 3 к 1</p>
              </li>
              <li>
                <p>Слой заливки от 30 до 60 мм</p>
              </li>
              <li>
                <p>Выход всех пузырьков воздуха</p>
              </li>
              <li>
                <p>Время отверждения 48-72 часа</p>
              </li>
              <li>
                <p>Время жизни 4 часа</p>
              </li>
              <li>
                <p>Сохнет при комнатной температуре</p>
              </li>
              <li>
                <p>Фасовка: 1,5кг; 5кг; 10кг; 20кг.</p>
              </li>
            </ul>
            <div className={style.actionBtns}>
              <button className={style.buyBtn}>КУПИТЬ НА WILDBERRIES</button>
              <img src={downloadDoc} alt="Сохранить документ" />
            </div>
          </div>
        </div>
      </header>
      <main className={style.mainPage}>
        <div className={style.mainPageText}>
          <p className={style.QuestionsText}>
            Если у Вас появился вопрос по нашим товарам, с нами всегда можно
            связаться!
          </p>
          <ul>
            <li>
              <img src={phone} />
              <p>Телефон:</p>
              <span className={style.boldText}>+7 (777) 777 77 77</span>
            </li>
            <li>
              <img src={mail} />
              <p>Розница:</p>
              <span className={style.boldText}>retail@dcart.su</span>
            </li>
            <li>
              <img src={mail} />
              <p>Опт:</p>
              <span className={style.boldText}>opt@dcart.su</span>
            </li>
            <li>
              <img src={human} />
              <p>ИП Смирнов Дмитрий Игоревич:</p>
              <span className={style.boldText}>ИНН 525626632989</span>
            </li>
            <li>
              <img src={location} />
              <p>г. Нижний Новгород,</p>
              <span className={style.boldText}>пр-кт Бусыгина 1 к.1</span>
            </li>
            <li>
              <img src={calendar} />
              <p>Режим работы:</p>
              <span className={style.boldText}>пн-пт с 9:00 до 17:00</span>
            </li>
          </ul>
        </div>
        <div className={style.mainForm}>
          <p className={style.form}>Форма обратной связи</p>
          <form className={style.mainPageForm} onSubmit={handleDefaultSettings}>
            <div>
              <p>Ваше имя:</p>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div>
              <p>Номер телефона:</p>
              <input type="text" placeholder="+7 (900) 000 00 00" />
            </div>
            <div>
              <p>Адрес электронный почты:</p>
              <input type="text" placeholder="pochta@mail.ru" />
            </div>
            <div>
              <p>Введите сообщение:</p>
              <textarea placeholder="Введите текст"></textarea>
            </div>
            <button>Отправить</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Main;
