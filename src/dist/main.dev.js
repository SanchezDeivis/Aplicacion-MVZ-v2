"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rdb = exports.fdb = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _bootstrapVue = require("bootstrap-vue");

require("chart.js");

require("hchs-vue-charts");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(window.VueCharts); // Install BootstrapVue


_vue["default"].use(_bootstrapVue.BootstrapVue); // Optionally install the BootstrapVue icon components plugin


_vue["default"].use(_bootstrapVue.IconsPlugin); //import Bootstrap and BootstrapVue css files:


_vue["default"].use(_vueAxios["default"], _axios["default"]);

var firebaseConfig = {
  apiKey: "AIzaSyBatjst6YztdkNN4p6OyNi2iki_YFUK4j0",
  authDomain: "mvz-v2.firebaseapp.com",
  databaseURL: "https://mvz-v2-default-rtdb.firebaseio.com",
  projectId: "mvz-v2",
  storageBucket: "mvz-v2.appspot.com",
  messagingSenderId: "532929931956",
  appId: "1:532929931956:web:6e4001c6adc6ae4c9d05e1",
  measurementId: "G-B41466VJ49"
}; // Initialize Firebase

_app["default"].initializeApp(firebaseConfig);

var fdb = _app["default"].firestore();

exports.fdb = fdb;

var rdb = _app["default"].database();

exports.rdb = rdb;
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");