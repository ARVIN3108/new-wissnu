import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { base } from "./config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
