import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, "src"),
  // root: path.resolve(__dirname, "src"),

  plugins: [react()],
});
