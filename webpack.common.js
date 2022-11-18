const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/public/favicon.ico',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      id: "restaurant-app-2.0",
      start_url: "./index.html",
      name: "Restaurant App 2.0",
      short_name: "Restaurant App",
      description: "Free App For Finding The Best Restaurant",
      display: "standalone",
      background_color: "#222831",
      theme_color: "#DDDDDD",
      icons: [
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
