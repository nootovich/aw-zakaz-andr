import React from "react";
import axios from "axios";

import styles from "./styles.module.css";

export default class GetPosts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/post/list`).then((res) => {
      const posts = res.data.posts;
      this.setState({ posts });
    });
  }

  handleLengthText = (k, text) => {
    if (text.length > k) text = text.substring(0, 35) + "...";
    return text;
  };

  handleGetPosts = () => {
    return this.state.posts.map((post) => (
      <div className={styles.post} key={post._id}>
        <img src={post.imgLink} alt='Изображение статьи' />
        <div className={styles.price}></div>
        <div className={styles.postInfo}>
          <p className={styles.name}>{this.handleLengthText(20, post.name)}</p>
          <div className={styles.description}>
            <p>{this.handleLengthText(27, post.description)}</p>
            <button>Читать</button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <this.handleGetPosts />;
  }
}
