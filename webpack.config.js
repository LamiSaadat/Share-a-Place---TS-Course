const path = require("path");

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "/src/app.ts") },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
