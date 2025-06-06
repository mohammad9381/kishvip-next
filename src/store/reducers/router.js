import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  routerKey: null,
};

const routerUpdateKey = (state, action) => {
  return updateObject(state, { routerKey: action.routerKey });
};

const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ROUTER_CHOOSE:
      return routerUpdateKey(state, action);
    default:
      return state;
  }
};

export default routerReducer;
