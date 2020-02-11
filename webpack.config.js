var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js", // энэ файлаас эхэлж compile хийнэ.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js" // dist фолдер луу ямар нэрээр гарахыг заана
  },
  devServer: {
    contentBase: "./dist" // dev-server нь dist фолдероос ажиллана гэдгийг зааж бна
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html" // энэхүү файлыг dist фолдер руу build хийх үед зөөнө
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
