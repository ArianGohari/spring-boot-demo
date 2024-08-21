import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Layout1 from "../views/@layout.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", Layout1, [
        createRoute("", Page0)
    ])
];
export default routes;
