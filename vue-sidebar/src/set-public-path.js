import { setPublicPath } from "systemjs-webpack-interop";
import packageJSON from "../package.json";

setPublicPath(packageJSON.name, 2);
