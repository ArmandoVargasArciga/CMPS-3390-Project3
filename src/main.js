import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { fpjsPlugin } from '@fingerprintjs/fingerprintjs-pro-vue-v3'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fpjsPlugin, {
  loadOptions: {
    apiKey: "xkP9ysGRLzpfzPiol5cv",
    region: "us"
  },
})
app.mount('#app')
