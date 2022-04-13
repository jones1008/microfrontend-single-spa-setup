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
    const loadFn = loadFns[name];
    return loadFn ? loadFn() : System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start({ urlRerouteOnly: true });
