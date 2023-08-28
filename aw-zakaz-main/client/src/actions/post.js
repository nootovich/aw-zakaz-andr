import axios from "axios";

export const postCreate = async (name, description, imgLink) => {
  try {
    const payload = { name, description, imgLink };
    const response = await axios.post(
      "http://localhost:5000/api/post/create",
      payload
    );

    if (response.status === 200) {
      window.location.href = "/posts"
    }

  } catch (event) { 
    alert(event.response.data.message)
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/post/list")
    return response.data.posts
  } catch (e) {
    alert(e)
  }
}

export const deletePosts = async () => {
  try {

  } catch (e) {
    alert(e)
  }
}