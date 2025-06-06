!(function () {
  function t() {
    var t = document.createElement("script");
    (t.type = "text/javascript"),
      (t.async = !0),
      localStorage.getItem("rayToken")
        ? (t.src =
            "https://app.raychat.io/scripts/js/" +
            o +
            "?rid=" +
            localStorage.getItem("rayToken") +
            "&href=" +
            window.location.href)
        : (t.src =
            "https://app.raychat.io/scripts/js/" +
            o +
            "?href=" +
            window.location.href);
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
  }
  var e = document,
    a = window,
    o = "6de03b0d-7f0d-449a-b3b6-ea48c409aa45";
  "complete" == e.readyState
    ? t()
    : a.attachEvent
    ? a.attachEvent("onload", t)
    : a.addEventListener("load", t, !1);
})();
