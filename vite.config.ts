import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    dts({
      // يولّد ملف الأنواع ويُدرجه في dist/index.d.ts
      insertTypesEntry: true,
      outDir: "dist",
      rollupTypes: true,
      //outputDir: "dist",
      // لو أردت تعطيل فحص الأنواع أثناء البناء:
      // skipDiagnostics: true
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueGram",
      fileName: (format) => `vuegram.${format}.js`,
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
