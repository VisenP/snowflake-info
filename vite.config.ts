import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: "es2020"
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "es2020"
        }
    },
    plugins: [react({
        babel: {
            plugins: ["babel-plugin-twin", "babel-plugin-macros", "babel-plugin-styled-components"],
            ignore: ["\x00commonjsHelpers.js"] // weird babel-macro bug workaround
        }
    })],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080"
            }
        }
    }

});
