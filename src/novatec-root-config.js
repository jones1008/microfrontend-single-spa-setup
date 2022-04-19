import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microFrontendLayout from "./microfrontend-layout.html";
import loadFns from "./microfrontend-map";

const routes = constructRoutes(microFrontendLayout);
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
