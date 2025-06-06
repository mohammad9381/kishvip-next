import * as actionTypes from "./actionTypes";

export const routerUpdate = (routerKey) => {
  return {
    type: actionTypes.ROUTER_CHOOSE,
    routerKey: routerKey,
  };
};
