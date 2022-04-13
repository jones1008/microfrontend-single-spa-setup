// for ES Modules:
// "@org/app-name": () => import(/* webpackIgnore: true */ "http://localhost:PORT/src/main.js"),
// for bundled stuff
// "@org/app-name": () => System.import("http://localhost:PORT/bundled.js"),

export default {
  "@novatec/vite-app": () =>
    import(/* webpackIgnore: true */ "http://localhost:8002/src/main.js"),
  "@novatec/vite-navbar": () =>
    import(/* webpackIgnore: true */ "http://localhost:8001/src/main.js"),
};
