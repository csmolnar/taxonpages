// 
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHashHistory } from 'vue-router'

import VueGoogleMaps from '@fawmi/vue-google-maps'

// 1. Define route components.
// These can be imported from other files

import Home from './views/Home.vue'
import About from './views/About.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const vuetify = createVuetify({
  components,
  directives,
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.

app.use(vuetify)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      // key: "AIzaSyBG9S-WKN2xDeyRkjXTY-YsJeDHTbZNriU"
      key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    }
  })
  .mount('#app')