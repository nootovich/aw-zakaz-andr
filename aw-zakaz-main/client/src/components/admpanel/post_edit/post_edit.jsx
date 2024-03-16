import React from "react";
import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";

const Postedit = () => {
    return (
        <>
        <header className={styles.admheader}>
        <img src={logo} />
        </header>
        <div className={styles.container}>
            <div className={styles.tovari}>
                <form action = "" className={styles.pageform}>
                    <label>Введите название товара:</label>
                    <div className={styles.firstedit}>
                        <input type = "text" placeholder = "Название товара" required className={styles.tovar}></input>
                        <input type = "file" accept="image/png, image/jpeg"></input>
                    </div>
                    <label>Описание товара:</label>
                    <textarea required placeholder="Введите текст"></textarea>
                    <div className={styles.secondedit}>
                        <div className={styles.price}>
                            <label>Розничная цена:</label>
                            <input type = "number" placeholder = "Введите цену" required></input>
                        </div>
                        <div className={styles.url}>
                            <label>Ссылка на товар:</label>
                            <input type = "text" placeholder = "Ссылка на товар" required></input>
                        </div>
                    </div>
                    <button type = "submit">Создать</button>
                </form>
            </div>
        </div>
        </>
    );
};
export default Postedit;