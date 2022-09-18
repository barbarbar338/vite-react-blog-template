import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "vite-plugin-pages";

export default defineConfig({
	resolve: {
		alias: {
			"@components": "/src/components",
			"@styles": "/src/styles",
			"@utils": "/src/utils",
		},
	},
	plugins: [
		react(),
		pages({
			dirs: ["src/pages"],
		}),
	],
});
