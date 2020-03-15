const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: ['@babel/polyfill', 'whatwg-fetch', "./webpack/home.js"],
    project: ['@babel/polyfill', 'whatwg-fetch', "./webpack/project.js"],
    postList: ['@babel/polyfill', 'whatwg-fetch', "./webpack/postList.js"],
    disqus: ['@babel/polyfill', 'whatwg-fetch', "./webpack/disqus.js"],
    js20200305: ['@babel/polyfill', 'whatwg-fetch', "./webpack/20200305.js"],
    /* postParagraph: ['@babel/polyfill', 'whatwg-fetch', "./webpack/postParagraph.js"] */
  },
  output: {
    path: path.resolve(__dirname, "./src/js/"),
    filename: "[name].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};