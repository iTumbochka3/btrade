import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

// Vuetify
import "vuetify/styles";
import { ThemeDefinition, createVuetify } from "vuetify";

const myTheme: ThemeDefinition = {
  variables: {
    "btn-height": "75px",
  },
  colors: {
    background: "#001529",
    surface: "#181D3B",
  },
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(vuetify);

app.mount("#app");
