import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const fetchClient = () => {
  let instance = axios.create({
    baseURL: "https://easyframe.ir/server",
    headers: { "Cache-Control": "no-cache" },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: "useCache",
    }),
  });

  instance.interceptors.request.use(function (config) {
    const isServer = typeof window == "undefined";

    let token = !isServer
      ? JSON.parse(localStorage.getItem("persist:root"))
        ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth)
          ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth)
              .token
          : null
        : null
      : null;

    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
    }
    return config;
  });

  // if(token)
  // {
  //     instance.defaults.headers.common['Authorization'] = "Bearer "+token;
  // }

  return instance;
};

export default fetchClient();
