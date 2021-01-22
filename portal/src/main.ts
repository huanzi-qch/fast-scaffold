import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//如果报错找不到.d.ts声明文件，执行：npm install @types/element-ui
//如果还是执行报错，那就使用@ts-ignore，强行抑制报错
// @ts-ignore
import locale from 'element-ui/lib/locale/lang/zh-CN'
// @ts-ignore
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import echarts from 'echarts'

Vue.use(Avue);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
