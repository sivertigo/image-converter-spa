import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Amplify, * as AmplifyModules from 'aws-amplify'
import awsExports from './aws-exports'
import { AmplifyPlugin } from 'aws-amplify-vue'
import router from './router'
import { components } from 'aws-amplify-vue'
import Vuex from 'vuex'
import store from './store'


Vue.config.productionTip = false
Amplify.configure(awsExports)
Vue.use(AmplifyModules, AmplifyPlugin, Vuex)
new Vue({
  vuetify,
  router,
  store,
  components: { 
    App,
    ...components
  },
  render: h => h(App)
}).$mount('#app')
