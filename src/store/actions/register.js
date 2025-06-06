import * as actionTypes from "./actionTypes";
import axios from "utilsFolder/fetchClient";
import { ErrorToast, WarningToast } from "../../hoc/ToastNotify/ToastNotify";

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

export const registerSuccess = (response) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    success: true,
    name: response.user.name,
    cellphone: response.user.cellphone,
    email: response.user.email,
  };
};

export const registerFail = (error, errorJson) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error,
    errorJson: errorJson,
  };
};

export const registerLoad = () => {
  return {
    type: actionTypes.REGISTER_LOAD,
    error: null,
    errorJson: null,
  };
};

export const registerCLEAR = () => {
  return {
    type: actionTypes.REGISTER_CLEAR,
  };
};

export const registerRequest = (Name, Cellphone, Password) => {
  return (dispatch) => {
    dispatch(registerStart());

    const registerData = {
      name: Name,
      cellphone: Cellphone,
      password: Password,
    };

    axios
      .get("api/register", { params: registerData })
      .then((response) => {
        if (response.data.error) {
          WarningToast("لطفا مجددا مقادیر فیلدها را بررسی نمایید");
          let errorJson = response.data.error;
          dispatch(registerFail("error", errorJson));
        } else {
          dispatch(registerSuccess(response.data.success));
        }
      })
      .catch((error) => {
        ErrorToast(error.message);
        dispatch(registerFail(error.message, {}));
      });
  };
};
