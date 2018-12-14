const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const dev = {
  mode: "development",
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      color: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      title: "Jijenge"
    })
  ]
};

const prod = {
  mode: "production",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      title: "Jijenge"
    })
  ]
};

const common = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { attrs: ["img:src"] }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              //Images folder in the src directory
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = env => {
  if (env.NODE_ENV === "development") {
    return Object.assign({}, common, dev);
  }
  if (env.NODE_ENV === "production") {
    return Object.assign({}, common, prod);
  }
};
