import React from "react";
import styles from "./styles.module.css";
import axios from "axios";

export default class PostList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/post/list`).then((res) => {
      const posts = res.data.posts;
      this.setState({ posts });
    });
  }

  handleLengthName = (text) => {
    if (text.length > 20) text = text.substring(0, 20) + "...";
    return text;
  };

  handleDeletePost = (id) => {
    axios
      .post(`http://localhost:5000/api/post/delete`, { id: id })
      .then((res) => {
        if (res.data.message === "post successfully deleted") {
          axios.get(`http://localhost:5000/api/post/list`).then((result) => {
            const posts = result.data.posts;
            this.setState({ posts });
          });
        } else {
          alert(res.data.message);
        }
      });
  };

  handleListPosts = () => {
    return this.state.posts.map((post) => (
      <div className={styles.box} key={post._id}>
        <p className={styles.namePost}>{this.handleLengthName(post.name)}</p>
        <button
          onClick={(el) => this.handleDeletePost(el.target.id)}
          id={post._id}
          className={styles.deletePost}
        >
          X
        </button>
      </div>
    ));
  };

  render() {
    return (
      <div className={styles.block}>
        <div className={styles.title}>
          <p>Статьи</p>
          <button className={styles.addPost}>+</button>
        </div>
        <this.handleListPosts />
      </div>
    );
  }
}
