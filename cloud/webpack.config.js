const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    "parse/node.js": "commonjs2 parse/node.js",
  },
  mode: "production",
};
