import Vue from "vue";
import App from "./App.vue";
import router from "@/routes";
import monitor from "monitor-sdk";
import "./style.css";

monitor.init({
  vue: {
    Vue,
    router,
  },
});

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
  router,
});
app.$mount("#app");
