import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/netfles/",
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          settings: ["./src/pages/SettingsPage"],
          movie: ["./src/pages/MoviePage"],
          tv: ["./src/pages/TVPage"],
        },
      },
    },
  },
});
