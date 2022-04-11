import { createApp, h } from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";
import router from "./router";

let vueLifecycles;

if (import.meta.env.MODE === "standalone") {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
} else {
  vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
      render() {
        return h(App, {
          props: {
            // single-spa props are available on the "this" object. Forward them to your component as needed.
            // https://single-spa.js.org/docs/building-applications#lifecyle-props
            name: this.name,
            mountParcel: this.mountParcel,
            singleSpa: this.singleSpa,
          },
        });
      },
    },
    handleInstance: (app) => {
      app.use(router);
    },
  });
}

export const bootstrap = vueLifecycles?.bootstrap;
export const mount = vueLifecycles?.mount;
export const unmount = vueLifecycles?.unmount;
