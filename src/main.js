import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*import "@/assets/Public_style/normalize.css"
import "@/assets/Public_style/reset.css"*/

// import "@/assets/imgs/eye_1.png"
// import "@/assets/imgs/eye_2.png"
//import App from './v-on'
//import App from './v-for.vue'
//import App from './odd_even.vue'
//import App from './v-model.vue'
//import App from './vue-bind.vue'
//import App from "./v-for-img";
//import App  from "./组件化开发";
//import App from "./学籍管理";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

