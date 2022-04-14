// only add ES Modules here:
// "@org/app-name": () => import(/* webpackIgnore: true */ "http://localhost:PORT/src/main.js"),

// don't add bundled stuff here (e.g. by webpack)
//  they need to go inside the importmap in index.ejs (systemjs-importmap)

export default {
  "@novatec/vite-app": () =>
    import(/* webpackIgnore: true */ "http://localhost:8002/src/main.js"),
  // "@novatec/vite-navbar":
  // () =>
  //   import(/* webpackIgnore: true */ "http://localhost:8001/src/main.js"),
};
