import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const fetchClient = () => {
  let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_2RIST_URL,
    headers: { "Cache-Control": "no-cache" },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: "useCache",
    }),
  });

  instance.interceptors.request.use(function (config) {
    const isServer = typeof window == "undefined";

    if (tokenString) {
      config.headers.common["Authorization"] = tokenString;
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
