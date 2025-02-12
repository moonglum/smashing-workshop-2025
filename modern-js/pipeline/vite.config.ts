import { defineConfig } from "vite";
import babel from "@vitejs/plugin-react";
export default defineConfig({
  esbuild: false,
  plugins: [
    babel({
      babel: {
        babelrc: true,
      },
    }),
  ],
});
