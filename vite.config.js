import { defineConfig } from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: import.meta.env.VITE_API_URL,
                changeOrigin: true,
                secure: false
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                favorites: "favorites.html",
                addMv: "addMv.html",
                edit: "edit.html",
                detail: "detail.html"
            }
        }
    }
});
