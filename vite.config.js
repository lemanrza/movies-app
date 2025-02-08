import { defineConfig } from "vite";

export default defineConfig({
    base: "./", 
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
