
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Detail from './views/UserDetail.vue'
import Edit from './views/UserEdit.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('app-user-detail', Detail)
Vue.component('app-user-edit', Edit)
Vue.config.productionTip = false

//This new instance is created before the main runnung instance, because it only contains events creating communication between components siblings
//so therefore the main instance is called last so that communication is created before it loads the full event loads fully carryall the pages

export const eventBus = new Vue({
  methods: {
    changeAge (age) {
        this.$emit('edittedAge', age)
    },

    resetA (age) {
      this.$emit('formalAge', age)
    }
}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
