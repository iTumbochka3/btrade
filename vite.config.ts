import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".sass"],
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/styles/styles.sass"
        `,
      },
    },
    devSourcemap: true,
  },
});
