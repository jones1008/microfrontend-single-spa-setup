import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microFrontendLayout from "./microfrontend-layout.ejs";
import loadFns from "./microfrontend-map";

// This configuration could be loaded from a database
const microFrontends = [{ path: "app1", name: "@novatec/vite-app" }];

const routes = constructRoutes(microFrontendLayout({ routes: microFrontends }));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    // first try to load it with System.import
    // if that fails try to load it as native in-browser ES module
    return System.import(name).catch(() => {
      const loadFn = loadFns[name];
      return loadFn();
    });
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start({ urlRerouteOnly: true });
