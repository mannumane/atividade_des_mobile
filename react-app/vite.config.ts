import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@app-types": path.resolve(__dirname, "src/types"),
      "@models": path.resolve(__dirname, "src/models"),
      "@routes": path.resolve(__dirname, "src/routes")
    }
  }
});
