import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BootstrapVue,
  IconsPlugin
} from "bootstrap-vue";

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//import Bootstrap and BootstrapVue css files:
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBatjst6YztdkNN4p6OyNi2iki_YFUK4j0",
  authDomain: "mvz-v2.firebaseapp.com",
  databaseURL: "https://mvz-v2-default-rtdb.firebaseio.com",
  projectId: "mvz-v2",
  storageBucket: "mvz-v2.appspot.com",
  messagingSenderId: "532929931956",
  appId: "1:532929931956:web:6e4001c6adc6ae4c9d05e1",
  measurementId: "G-B41466VJ49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const fdb = firebase.firestore();
export const rdb = firebase.database();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");