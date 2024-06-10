export default function error(config) {
  // console.log("error");
  // const rawOnError = window.onerror;
  // window.onerror = function (message, source, lineno, colno, error) {
  //   if (rawOnError) {
  //     rawOnError(message, source, lineno, colno, error);
  //   }
  //   console.log("onerror监听中");
  //   console.log(message, source, lineno, colno);
  //   console.log(error);
  // };
  window.addEventListener(
    "error",
    function (event) {
      console.log("error 监听中");
      const target = event.target;
      // 判断是否是资源加载错误 还是 js 错误
      if (target && (target.src || target.href)) {
        console.log("资源加载错误", target.src || target.href);
      } else {
        console.log(
          "js 错误",
          event.message,
          event.filename,
          event.lineno,
          event.colno,
          event.error,
        );
      }
    },
    true,
  );
  // TODO promise 错误
  window.addEventListener("unhandledrejection", function (event) {
    console.log("unhandledrejection 监听中");
    console.log(event.reason);
  });
  // TODO Vue 错误
  if (config?.vue?.Vue) {
    console.log("vue 错误监听中");
    config.vue.Vue.config.errorHandler = function (err, vm, info) {
      console.log("vue 错误", err, vm, info);
    };
  }
}
