const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  devtool: "eval-cheap-source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_module/, loader: "babel-loader" }
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
