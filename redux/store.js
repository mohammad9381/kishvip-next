import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "store/reducers/auth";
import registerReducer from "store/reducers/register";
import routerReducer from "store/reducers/router";
import thunk from "redux-thunk";

// create your reducer
export const reducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  router: routerReducer,
});

const makeConfiguredStore = (reducer, initialState, middle) =>
  createStore(reducer, initialState, middle);

// create a makeStore function
export const makeStore = (initialState) => {
  const isServer = typeof window == "undefined";

  if (isServer) {
    initialState = initialState || {};

    return makeConfiguredStore(reducer, initialState, applyMiddleware(thunk));
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      whitelist: ["auth"], // make sure it does not clash with server keys
      storage,
    };
    const composeEnhancers =
      (typeof window != "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = makeConfiguredStore(
      persistedReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

export const setClientState = (clientState) => ({
  type: SET_CLIENT_STATE,
  payload: clientState,
});
