const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = [
  {
    name: "client",
    entry: "./src/index.js",
    mode: "development",
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
      path: path.resolve(__dirname, "public/scripts/dist/"),
      publicPath: "/scripts/dist/",
      filename: "bundle.js",
    },
    devServer: {
      port: 3000,
      static: {
        directory: path.join(__dirname, "public"),
        serveIndex: true,
      },
      historyApiFallback: true,
    },
    plugins: [
      new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
      new Dotenv(),
    ],
  },
  {
    name: "admin",
    entry: "./admin/index.js",
    mode: "development",
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
      path: path.resolve(__dirname, "public/scripts/dist/"),
      publicPath: "/scripts/dist/",
      filename: "bundle.admin.js",
    },
    devServer: {
      port: 3001,
      static: {
        directory: path.join(__dirname, "public"),
        serveIndex: true,
      },
      historyApiFallback: true,
    },
    plugins: [
      new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
      new Dotenv(),
    ],
  },
];
