import axios from "axios";
import { showError } from "./showerror";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "Post",
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      showError("success", 'Logged in Succesfully');
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (error) {
    showError('error', error.response.data.message);
  }
};
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showError('error', 'Error logging out! Try again.');
  }
};
