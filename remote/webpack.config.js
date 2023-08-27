const { Configuration } = require("webpack-dev-server");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

/**
 * @type {Configuration}
 */
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: 'images/[contenthash:8][ext]',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: [".vue", ".jsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: 'swc-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "js/remoteEntry.js",
      remotes: {
        host: "host@http://localhost:3002/js/remoteEntry.js"
      },
      exposes: {}
    })
  ],
  devServer: {
    port: 3001
  }
}