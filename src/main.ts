import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { Input } from 'ant-design-vue';

const app = createApp(App)
app.use(router)
app.use(Input)

app.mount('#app')