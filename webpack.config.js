const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlsWebpackPlugin = require('htmls-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const pug = require('pug');
// const globImporter = require('node-sass-glob-importer');

let contPlugin = [];
let page;

//pug файлы генерируемые в html
fs.readdirSync('./src/').forEach(file => {
  if (String(file).endsWith('.pug')) {
    page = new HtmlWebpackPlugin({
      template: `./src/${file}`,
      filename: `./${path.basename(file, '.pug')}.html`,
      minify: true,
      hash: false
      // htmls: [{
      //   src: `./src/${file}`,
      //   filename: `./${path.basename(file, '.pug')}.html`,
      //   render: (file, params) => {
      //     return pug.renderFile(file, params);
      //   }
      // }]
    });
    contPlugin.push(page);
  }
});

let config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules[\/\\](?!(swiper|dom7)[\/\\])/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: '2.x'
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              // config: { path: `./postcss.config.js` }
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer({
                      browsers:['defaults', 'ie >= 11', 'last 8 versions']
                    })
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // importer: globImporter(),
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'public/images/[name].[ext]';
              },
            },
          },
        ],
      },
      {
        test: /\.(webp)$/,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'public/images/[name].webp';
              },
            },
          },
          {
            loader: 'webp-loader?{quality:100, method:0}',
          },
        ],
      },

      {
        test: /\.(eot|ttf|woff|woff2|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'public/fonts/[name].[ext]';
              },
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        include: /icons/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {symbolId: filePath => path.basename(filePath, '.svg')},
          },
          'svg-fill-loader',
          'svgo-loader',
        ],
      },
    ]
  },

  plugins: contPlugin
}

contPlugin.push(
  //очистка папки dist сборкой
  new CleanWebpackPlugin(),

  //отвечает за css
  new MiniCssExtractPlugin({
    filename: "css/[name].css"
  }),

  //отвечает за копирование не компилируемых файлов в продакшен
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/public',
        to: './'
      }
    ]
  }),

  //подключение jquery в проект
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    // 'window.$': 'jquery'
  })
);

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = false;
  }

  if (argv.mode === 'development') {
    contPlugin.push(new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }));
  }

  console.log(argv.mode, 'aaaaaa')

  return config;
}
