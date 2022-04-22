import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const BASE_URL = "http://localhost:8001/";

const prefixer = require("postcss-prefix-selector");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.js",
      preserveEntrySignatures: true,
      output: {
        format: "system",
        entryFileNames: "src/[name].js",
      },
    },
  },
  base: BASE_URL,
  server: {
    origin: BASE_URL,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        prefixer({
          prefix: "#single-spa-application\\:\\@novatec\\/vite-navbar",
        }),
      ],
    },
  },
});
