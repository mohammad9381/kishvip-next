import * as actionTypes from "store/actions/router";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = (state) => {
  return {
    routerKey: state.router.routerKey,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    routerUpdate: (page) => dispatch(actionTypes.routerUpdate(page)),
  };
};

export const connectRouterStore = connect(mapStateToProps, mapDispatchToProps);
