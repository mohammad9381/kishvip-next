import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  errorJson: null,
  loading: false,
  user: null,
};

const authStart = (state, action) => {
  return updateObject(state, { errorJson: null, error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    user: action.user,
    error: null,
    errorJson: null,
    loading: false,
  });
};
const authFail = (state, action) => {
  return updateObject(state, {
    errorJson: action.errorJson,
    error: action.error,
    loading: false,
  });
};
const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null, user: null });
};

const authLoad = (state, action) => {
  return updateObject(state, { error: null, errorJson: null });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_LOAD:
      return authLoad(state, action);
    default:
      return state;
  }
};

export default authReducer;
