
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Detail from './views/UserDetail.vue'
import Edit from './views/UserEdit.vue'
import QuoteD from './views/quoteDisplay.vue'

Vue.component('app-user-detail', Detail)
Vue.component('app-user-edit', Edit)
Vue.component('app-quote', QuoteD)
Vue.config.productionTip = false

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
