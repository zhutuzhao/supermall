import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import toast from "components/common/toast";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(toast);
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
});
new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
