import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const cookies = new Cookies()
const logo = "/static/logo.png";

const Postedit = () => {
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState(0);
    const [link, setlink] = useState("");
    const [image, setimage] = useState(null);
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
            navigate("/");
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const isResponseOk = (response) => {
        console.log(response)
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    }
    
    const create = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('name', name) 
        formData.append('description', description) 
        formData.append('price', price) 
        formData.append('link', link) 
        formData.append('image', image) 
        fetch("/api/products/", {
            method: "POST",
            headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin",
            body: formData,
        })
        .then(isResponseOk)
        .then((data) => {
            setname("")
            setdescription("")
            setprice("")
            setlink("")
            setimage("")
            seterror("")
            document.getElementsByName("image")[0].value = "" 
        })
        .catch((err) => {
            console.log(err);
            seterror("Не удалось создать товар.");
        });
    }

    getSession();
    return (
        isauthenticated ? 
        <>
        <header className={styles.admheader}>
        <img src={logo} />
        </header>
        <div className={styles.container}>
            <div className={styles.tovari}>
                <form className={styles.pageform} encType="multipart/form-data" onSubmit={create}>
                    <label>Введите название товара:</label>
                    <div className={styles.firstedit}>
                        <input 
                        type = "text" 
                        placeholder = "Название товара" 
                        name = "name" 
                        value = {name} 
                        onChange = {(e) => setname(e.target.value)} 
                        required 
                        className={styles.tovar}></input>
                        <input 
                        type = "file" 
                        accept="image/png, image/jpeg" 
                        name = "image"
                        onChange = {(e) => setimage(e.target.files[0])} 
                        ></input>
                    </div>
                    <label>Описание товара:</label>
                    <textarea 
                    required 
                    placeholder="Введите текст" 
                    name = "description"
                    value = {description} 
                    onChange = {(e) => setdescription(e.target.value)} ></textarea>
                    <div className={styles.secondedit}>
                        <div className={styles.price}>
                            <label>Розничная цена:</label>
                            <input 
                            type = "number" 
                            placeholder = "Введите цену" 
                            name = "price" 
                            value = {price}
                            onChange = {(e) => setprice(e.target.value)}
                            required></input>
                        </div>
                        <div className={styles.url}>
                            <label>Ссылка на товар:</label>
                            <input 
                            type = "text" 
                            placeholder = "Ссылка на товар" 
                            name = "link" 
                            value = {link}
                            onChange = {(e) => setlink(e.target.value)}
                            required></input>
                        </div>
                    </div>
                    <button type = "submit">Создать</button>
                </form>
            </div>
        </div>
        </>
    : <></>
    );
};
export default Postedit;