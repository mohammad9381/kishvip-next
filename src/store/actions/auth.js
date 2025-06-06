import * as actionTypes from "./actionTypes";
import axios from "utilsFolder/fetchClient";
import { NotificationServerToastNotify } from "../../hoc/ToastNotify/NotificationServerToastNotify";
import { SuccessToast, WarningToast } from "../../hoc/ToastNotify/ToastNotify";
import { cartSetUser } from "./cart";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, userDetail) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    user: userDetail,
  };
};

export const authFail = (error, errorJson) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
    errorJson: errorJson,
  };
};

export const authLoad = () => {
  return {
    type: actionTypes.AUTH_LOAD,
    error: null,
    errorJson: null,
  };
};

export const auth = (cellphone, password) => {
  return (dispatch) => {
    dispatch(authStart());

    const authData = {
      cellphone: cellphone,
      password: password,
    };
    axios
      .get("api/login", { params: authData })
      .then((response) => {
        if (response.data.error) {
          WarningToast("لطفا مجددا مقادیر فیلدها را بررسی نمایید");
          let errorJson = response.data.error;
          dispatch(authFail("error", errorJson));
        } else {
          let token = response.data.success.token;
          let user = response.data.success.user;

          localStorage.setItem("token", token);
          localStorage.setItem("expire_date", 456000);

          dispatch(authSuccess(token, user.id, user));
          NotificationServerToastNotify(response.data.success.messages);
          dispatch(cartSetUser(user.id));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.message));
      });
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expire_date");

  SuccessToast("با موفقیت از سیستم خارج شدید");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
