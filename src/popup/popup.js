import Vue from "vue";
import App from "./App";
import axios from "axios";
import echarts  from "echarts/lib/echarts";
import {customed,dark} from '../common/js/theme'
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import {
  Select,
  Option,
  Switch,
  Slider,
  Tabs,
  TabPane,
  RadioButton,
  RadioGroup,
  Dialog,
  Button,
  Loading,
  Icon
} from 'element-ui';

echarts.registerTheme('customed',customed)
echarts.registerTheme('dark',dark)

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$ELEMENT = { size: 'mini' };
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;

Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Slider)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Icon)

/* eslint-disable no-new */
new Vue({
  el: "#app",

  render: h => h(App)
});