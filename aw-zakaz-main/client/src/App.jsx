import { Route, Routes } from "react-router-dom";
import styles from "./components/main/styles.module.css";

import Main from "./components/main/main";
import Login from "./components/login/login";
import Catalog from "./components/catalog/catalog";
import Posts from "./components/posts/posts";
import Review from "./components/review/review";
import Contacts from "./components/contacts/contacts";
import Adminpanel from "./components/admpanel/admpanel";
import Postedit from "./components/admpanel/post_edit/post_edit";

function App() {
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
        <Route path='/adm-panel/post-edit' element={<Postedit />} />
      </Routes>
      <footer className={styles.footer}>
        <img src="/static/footer.png" />
      </footer>
    </>
  );
}

export default App;
