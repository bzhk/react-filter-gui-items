import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
// import uglify from "rollup-plugin-uglify";
const NODE_ENV = process.env.NODE_ENV || "development";
export default [
  {
    input: "example/App.jsx",
    output: {
      file: "example/App.build.js",
      format: "cjs"
    },
    plugins: [
      resolve(),
      commonjs({
        include: ["node_modules/**"]
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      }),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
