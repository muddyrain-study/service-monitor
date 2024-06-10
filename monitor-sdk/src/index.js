import { setConfig } from "./config";
import error from "./error";
const monitor = {
  init(options = {}) {
    console.log("init");
    setConfig(options); // 设置配置
    error(options); // 上报错误
  },
};

export default monitor;
