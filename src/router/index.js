import Vue from 'vue'
import VueRouter from 'vue-router'
import PrivateNote from '@/components/PrivateNote.vue'
import ImageConverter from '@/components/ImageConverter.vue'
import SignIn from '@/components/SignIn.vue'
import store from '@/store/index.js'


import { AmplifyEventBus } from 'aws-amplify-vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)

let user

getUser().then(() => {
  if (user) {
    router.push({path: '/'})
  }
})

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      store.commit('setUser', data)

      return data;
    }
  }).catch(() => {
    store.commit('setUser', null)

    return null
  })
}

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null
    store.commit('setUser', null)

    router.push({path: '/signin'}, () => {})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
  }
})

const routes = [
  {
    path: '/',
    name: 'ImageConverter',
    component: ImageConverter,
    meta: { requireAuth: true }

  },
  {
    path: '/note',
    name: 'PrivateNote',
    component: PrivateNote
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
]

const router = new VueRouter({
  routes
})

export default router
