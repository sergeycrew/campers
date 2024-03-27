import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      "/adverts": {
        target: "https://65fcfea69fc4425c6530f49e.mockapi.io",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/adverts/, ""),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
      styles: "/src/styles",
    },
  },
  base: "/campers",
});
