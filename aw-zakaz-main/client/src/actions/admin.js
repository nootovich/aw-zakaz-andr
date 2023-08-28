import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const auth = async (login, password) => {
  try {
    const payload = { login, password };
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      payload
    );

    const token = response.data.token;

    if (token) {
      localStorage.setItem("token", token);
      setAuthToken(token);
      window.location.href = "/"
    }
  } catch (event) { 
    alert(event.response.data.message)
  }
};
