import { connect } from "react-redux";
import React from "react";
import * as actionTypes from "../../store/actions/auth";

export function connectUserStore(OriginalComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class extends React.Component {
      render() {
        //return original component with additional props
        return <OriginalComponent {...this.props} />;
      }
    }
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userUpdate: (token, userId, User) =>
      dispatch(actionTypes.authSuccess(token, userId, User)),
  };
};

const mapStateToProps = (state) => {
  return {
    tokenData: state.auth.token,
    isAuthenticated: state.auth.token !== null,
    userData: state.auth.user,
  };
};
