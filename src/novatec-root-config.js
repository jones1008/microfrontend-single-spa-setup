import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@novatec/vite-navbar",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:8001/src/main.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@novatec/vite-app",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:8002/src/main.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true, // needed for vue router to work (see https://single-spa.js.org/docs/ecosystem-vue#vue-3)
});
