import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: false,
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
});
