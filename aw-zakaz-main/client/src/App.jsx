import { Route, Routes } from "react-router-dom";
import { setAuthToken } from "../src/actions/admin";

import styles from "./components/main/styles.module.css";

import Main from "./components/main/main";
import Login from "./components/login/login";
import Catalog from "./components/catalog/catalog";
import Posts from "./components/posts/posts";
import Review from "./components/review/review";
import Contacts from "./components/contacts/contacts";
import Adminpanel from "./components/admpanel/admpanel";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/adm-panel' element={<Adminpanel />} />
      </Routes>
      <footer class={styles.footer}>
        <img src='./src/assets/footer.png' />
      </footer>
    </>
  );
}

export default App;
