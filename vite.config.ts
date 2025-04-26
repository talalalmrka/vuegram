import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    dts(),
    //dts({
      //insertTypesEntry: true,
      //outDir: "dist",
      //rollupTypes: true,
      //include: ["src/**/*.ts", "src/**/*.vue"], // Include TypeScript and Vue files
    //}),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "FadgramVue",
      fileName: (format) => `fadgram-vue.${format}.js`,
    },
    rollupOptions: {
      // لا تضمّن Vue داخل الحزمة، سيأخذها المستخدم من خارجه
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
