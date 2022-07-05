const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    name: "client",
    entry: {
      "app.bundle": "./src/index.js",
      "admin.bundle": "./admin/index.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(a?png|jpe?g|gif|avif|svg|webp|webm|mp4)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.csv$/,
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
            fastMode: true,
            transform: (value, key) =>
              key === "description" ? value.trim() : value,
          },
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      fallback: {
        fs: false,
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        http: require.resolve("stream-http/"),
        url: require.resolve("url/"),
        https: require.resolve("https-browserify/"),
        os: require.resolve("os-browserify/"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "[name].js",
    },
    devServer: {
      port: 3001,
      static: [
        {
          directory: path.join(__dirname, "public"),
          serveIndex: true,
        },
      ],
      historyApiFallback: true,
    },
    plugins: [
      new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
      new Dotenv(),
    ],
  },
  {
    name: "server",
    entry: {
      "server.bundle": "./bin/www",
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(a?png|jpe?g|gif|avif|svg|webp|webm|mp4)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.csv$/,
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
            fastMode: true,
            transform: (value, key) =>
              key === "description" ? value.trim() : value,
          },
        },
      ],
    },
    externals: [nodeExternals()],
    node: {
      __dirname: false,
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "[name].js",
    },
    plugins: [new Dotenv()],
  },
];
