const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/transform-runtime'
            ]
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ],
  devtool : 'source-map',
};

module.exports = config;