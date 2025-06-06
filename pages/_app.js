import "../styles/globals.css";
import "react-animated-slider/build/horizontal.css";
import "assets/css/slider-animations.css";
import "assets/css/homeslider.css";
import "assets/plugins/fontawesome/css/font-awesome.min.css";
import "assets/plugins/line-awesome/css/line-awesome.min.css";
import "assets/plugins/flaticon/flaticon.css";
import "assets/plugins/flaticon/beer/flaticon.css";
import "assets/css/templete.min.css";
import "assets/css/templete.min-12-05-20.css";
import "assets/css/plugins.css";
import "assets/css/style.css";
import "assets/css/skin/skin-4.css";
import "assets/css/responsive.css";
import "assets/css/bootstrap-rtl.css";
import "react-toastify/dist/ReactToastify.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { ToastContainer } from "react-toastify";
import CacheBuster from "hoc/CacheBuster/CacheBuster";
import { wrapper } from "../redux/store";
import { Provider, ReactReduxContext } from "react-redux";

function MyApp({ Component, pageProps }) {
  const title = pageProps.title ? "Kish Vip | " + pageProps.title : "Kish Vip ";
  const description = pageProps.description
    ? "سایت کیش VIP سایت تخصصی رزرو رستوران و تفریحات در کیش با تخفیف های دائمی"
      ? "سایت کیش VIP سایت تخصصی رزرو رستوران و تفریحات در کیش با تخفیف های دائمی"
      : pageProps.description
    : "کیش VIP سایت اختصاصی خرید گردشگری در ایران";
  const keyword = pageProps.keyword
    ? pageProps.keyword
    : "گردشگری کیش ,تفریحات کیش ,تخفیف گردشگری کیش,تخفیف رستوران صفدری ";

  const url = pageProps.url ? pageProps.url : "https://kishvip.com";

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="samandehi" content="218237511" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MLFKJ48YSM"
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "G-MLFKJ48YSM");`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
                   var now = new Date();
                var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
                    "0" + now.getHours();
                var head = document.getElementsByTagName("head")[0];
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://app.najva.com/static/css/local-messaging.css" + "?v=" + version;
                head.appendChild(link);
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
               script.src = "https://app.najva.com/static/js/scripts/kishvip938-website-33387-86efad65-c0f7-4ab8-a165-b21da8d8e7c7.js" + "?v=" + version;
               head.appendChild(script);
             
                })()`,
          }}
        />
        <meta name="keywords" content={keyword} />
      </Head>
      <Script type="text/javascript" src={"/js/raychat.js"} />
      <NextSeo
        title={title}
        description={description}
        keywords={keyword}
        canonical="https://www.kishvip.com/"
        openGraph={{
          url: url,
          title: title,
          description: description,
          keywords: keyword,
          site_name: "kishvip.com",
        }}
      />
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <ReactReduxContext.Consumer>
              {({ store }) => {
                return (
                  <Provider store={store}>
                    <PersistGate persistor={store.__persistor}>
                      <div className={"App"}>
                        <NextNprogress
                          color="#3396d1"
                          startPosition={0.3}
                          stopDelayMs={200}
                          height={5}
                          showOnShallow={false}
                        />
                        <Component {...pageProps} />
                        <ToastContainer rtl={true} />
                      </div>
                    </PersistGate>
                  </Provider>
                );
              }}
            </ReactReduxContext.Consumer>
          );
        }}
      </CacheBuster>{" "}
    </>
  );
}

export default wrapper.withRedux(MyApp);
