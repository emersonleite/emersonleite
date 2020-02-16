const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: "./webpack/home.js",
    project: "./webpack/project.js"
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



/* const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./webpack/script.js",
  output: {
    path: path.resolve(__dirname, "./src/assets/javascripts/"),
    filename: "main.js"
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

 */