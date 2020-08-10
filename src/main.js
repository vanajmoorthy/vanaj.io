import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import router from './router'

Vue.config.productionTip = false;

new Vue({
    router,

    render: function(h) {
		return h(App);
	}
}).$mount("#app");
