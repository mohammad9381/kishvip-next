import { createTransform } from "redux-persist";

// braie filter kardan kar roie dadeha moghe load unload estefade mishe az local storage

const SetTransformStudio = createTransform(
  (inboundState, key) => {
    // console.log('inbound',key,inboundState)
    return inboundState;
  },
  (outboundState, key) => {
    // console.log('outbound',key,outboundState)
    return { ...outboundState, loading: false };
  },
  // define which reducers this transform gets called for.
  { whitelist: ["auth"] }
);

export default SetTransformStudio;
