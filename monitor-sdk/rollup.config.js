import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.js",
  output: [
    {
      file: "./lib/index.js",
      format: "iife",
      name: "monitor",
    },
    {
      file: "./lib/index.esm.js",
      format: "esm",
    },
    {
      file: "./lib/index.umd.js",
      format: "umd",
      name: "monitor",
    },
  ],
  watch: {
    exclude: "node_modules/**",
  },
  plugins: [
    // getBabelOutputPlugin({
    //   presets: ["@babel/preset-env"],
    //   allowAllFormats: true,
    // }),
    commonjs(),
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js"],
    }),
  ],
};

export default config;
