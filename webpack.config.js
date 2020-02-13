var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/js/index.js", // энэ файлаас эхэлж compile хийнэ.
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/main.js" // docs фолдер луу ямар нэрээр гарахыг заана
  },
  devServer: {
    contentBase: "./docs" // dev-server нь docs фолдероос ажиллана гэдгийг зааж бна
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html" // энэхүү файлыг docs фолдер руу build хийх үед зөөнө
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
