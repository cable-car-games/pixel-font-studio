import React from "react";
import { createRoot } from "react-dom/client";
import { AppShell } from "./components/AppShell";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<AppShell />);
