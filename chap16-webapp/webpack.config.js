const path = require("path");
const build = path.resolve(__dirname, "build");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    path: build,
    filename: "bundle.js"
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".css"] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  devServer: {
    static: "./assets",
    port: 4500
  }
};