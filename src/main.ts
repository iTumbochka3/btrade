import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({});

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(vuetify);

app.mount("#app");
