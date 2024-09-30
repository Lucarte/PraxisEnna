import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: false, // Set to false if you don't need source maps in production
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	base: "/praxis-urvertrauen.de/",
});
