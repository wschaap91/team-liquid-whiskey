import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { createPinia } from 'pinia'

import App from './App.vue'
import { firebaseApp } from '@/firebase.js'

import router from './router'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: []
})

app.use(createPinia())
app.use(router)

app.mount('#app')
