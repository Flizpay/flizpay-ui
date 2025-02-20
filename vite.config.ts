import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    // Library entry points
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "@flizpay-de/ui",
      fileName: "@flizpay-de/ui",
    },
    // Bundler oprtions
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
