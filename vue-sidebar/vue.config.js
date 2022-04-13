const { defineConfig } = require("@vue/cli-service");
const prefixer = require("postcss-prefix-selector");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            prefixer({
              prefix: "#single-spa-application\\:\\@novatec\\/vue-sidebar",
            }),
          ],
        },
      },
    },
  },
});
