import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Router } from "./router";

import "@styles/tailwind.css";
import "@styles/blog.scss";
import "highlight.js/styles/tomorrow-night-bright.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
);
