const config = {
  appId: "monitor-sdk",
  userId: "1",
  // 上报地址
  reportUrl: "http://localhost:3000//actions",
  // 是否全埋点
  trackerAll: false,
  vue: {
    Vue: null,
    router: null,
  },
  ua: navigator.userAgent,
};

export default config;

export function setConfig(options) {
  for (const configKey in config) {
    if (options[configKey]) {
      config[configKey] = options[configKey];
    }
  }
}
