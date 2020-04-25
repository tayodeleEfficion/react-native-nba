import axios from "axios";
import { SIGN_UP, SIGN_IN } from "../Types";

import { SIGNIN, SIGNUP, DATABASEURL, REFRESH } from "../../Utils/misc";

export function Signup(data) {
  const request = axios({
    method: "POST",
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },

    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      return false;
    });

  return {
    type: SIGN_UP,
    payload: request,
  };
}
export function Signin() {
  return {
    type: SIGN_IN,
    payload: {
      email: "tunde.lhn@gmail.com",
      token: "olumide@2014",
    },
  };
}
