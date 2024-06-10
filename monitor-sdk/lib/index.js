var monitor = (function () {
  'use strict';

  var config = {
    appId: "monitor-sdk",
    userId: "1",
    // 上报地址
    reportUrl: "http://localhost:3000//actions",
    // 是否全埋点
    trackerAll: false,
    vue: {
      Vue: null,
      router: null
    },
    ua: navigator.userAgent
  };
  function setConfig(options) {
    for (var configKey in config) {
      if (options[configKey]) {
        config[configKey] = options[configKey];
      }
    }
  }

  function error(config) {
    var _config$vue;
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
    window.addEventListener("error", function (event) {
      console.log("error 监听中");
      var target = event.target;
      // 判断是否是资源加载错误 还是 js 错误
      if (target && (target.src || target.href)) {
        console.log("资源加载错误", target.src || target.href);
      } else {
        console.log("js 错误", event.message, event.filename, event.lineno, event.colno, event.error);
      }
    }, true);
    // TODO promise 错误
    window.addEventListener("unhandledrejection", function (event) {
      console.log("unhandledrejection 监听中");
      console.log(event.reason);
    });
    // TODO Vue 错误
    if (config !== null && config !== void 0 && (_config$vue = config.vue) !== null && _config$vue !== void 0 && _config$vue.Vue) {
      console.log("vue 错误监听中");
      config.vue.Vue.config.errorHandler = function (err, vm, info) {
        console.log("vue 错误", err, vm, info);
      };
    }
  }

  var monitor = {
    init: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log("init");
      setConfig(options); // 设置配置
      error(options); // 上报错误
    }
  };

  return monitor;

})();
