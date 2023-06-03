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
    if (res.data.status === "Success") {
      showError("success", 'Logged in Succesfully');
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (error) {
    showError('error', error.response.data.message);
  }
};
