import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//全局变量
import {TIMEOUT, ERR_OK, baseURL, STATUS} from '@/assets/js/config'
Vue.prototype.baseURL = baseURL;
console.log(baseURL.dev)
//html2canvas
import html2canvas from 'html2canvas';
Vue.prototype.html2canvas = html2canvas
//jquery
import jquery from 'jquery';
Vue.prototype.$ = jquery
//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//VueSocketio
import VueSocketio from 'vue-socket.io';
Vue.use(new VueSocketio({
    debug: false,
    connection: baseURL.dev,
}))
//xhr
import {xhr} from '@/assets/js/api'
Vue.prototype.$xhr = xhr
//markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
//css
import'./assets/css/index.css'
import'./assets/css/animate.min.css'

/*-----------------------------------------------全局函数-----------------------------------------------------*/
//提示框
Vue.prototype.open=function(message,type){
	this.$message({
	  message: message,
	  type: type,
	  duration:"1000"
	});
};

/*------------------------------------------------全局函数结束--------------------------------------------------*/
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})