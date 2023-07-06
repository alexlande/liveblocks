import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  splitting: true,
  clean: true,
  target: "es2015",
  format: ["esm", "cjs"],
  minify: true,
  sourcemap: true,
});
