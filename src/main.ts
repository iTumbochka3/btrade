import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Input } from "ant-design-vue";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(router);
app.use(Input);
app.use(VueApexCharts);

app.mount("#app");
