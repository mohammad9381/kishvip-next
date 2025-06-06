import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";
import {

  InfoToast,
  SuccessToast,
} from "hoc/ToastNotify/ToastNotify";

const initialState = {
  name: null,
  cellphone: null,
  email: null,
  error: null,
  loading: false,
  errorJson: null,
  success: false,
};

const registerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    success: false,
  });
};

const registerSuccess = (state, action) => {
  SuccessToast(
    "ثبت نام با موفقیت انجام و کد تایید به شماره همراه شمار ارسال گردید."
  );
  InfoToast("به صفحه تایید شماره همراه منتقل می شوید.");
  return updateObject(state, {
    name: action.name,
    cellphone: action.cellphone,
    email: action.email,
    error: null,
    loading: false,
    success: true,
  });
};
const registerFail = (state, action) => {
  return updateObject(state, {
    success: false,
    error: action.error,
    loading: false,
    errorJson: action.errorJson,
  });
};

const registerLoad = (state, action) => {
  return updateObject(state, { error: null, errorJson: null });
};

const registerClear = (state, action) => {
  return updateObject(state, {
    name: null,
    cellphone: null,
    email: null,
    error: null,
    loading: false,
    errorJson: null,
    success: false,
  });
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return registerStart(state, action);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state, action);
    case actionTypes.REGISTER_FAIL:
      return registerFail(state, action);
    case actionTypes.REGISTER_LOAD:
      return registerLoad(state, action);
    case actionTypes.REGISTER_CLEAR:
      return registerClear(state, action);
    default:
      return state;
  }
};

export default registerReducer;
