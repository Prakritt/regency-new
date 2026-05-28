import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-dom") || id.includes("react-router-dom")) {
            return "react-vendor";
          }
          if (id.includes("framer-motion")) return "motion-vendor";
          if (
            id.includes("@material-tailwind") ||
            id.includes("@heroicons") ||
            id.includes("react-icons")
          ) {
            return "ui-vendor";
          }
          return "vendor";
        },
      },
    },
  },
});
