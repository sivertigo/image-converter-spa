import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { AmplifyPlugin } from 'aws-amplify-vue'


Vue.config.productionTip = false
Amplify.configure(awsExports)
Vue.use(Amplify, AmplifyPlugin)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
