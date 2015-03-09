import path from 'path';
import webpack from 'webpack';


module.exports = () => {
  var config = {
    cache: true,
    entry: {
      //'webpack-dev-server': 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      //'webpack-hot': 'webpack/hot/only-dev-server',
      app: './src/js/application/bootstrap.js',
      vendors: [
        'backbone.nativeajax',
        'react',
        'react-prefixr',
        'lodash',
        'underscore',
        'backbone',
        'exoskeleton',
        'moment',
        'jquery'
      ]
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'public'),
      publicPath: 'public',
      chunkFilename: 'app.js',
      sourceMapFilename: '[file].map'
    },
    plugins: [
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin(
        'vendors',
        'vendors.js'
      )
    ],
    'module': {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?experimental'
        },
        {
          test: /\.jsx$/,
          loaders: [
            //'react-hot',
            'babel-loader?experimental'
          ],
          exclude: /node_modules/
        },
        {
          test: /exoskeleton\.js$/,
          loader: 'imports?define=>false'
        },
        {
          test: /jquery\.js$/,
          loader: 'null'
        }
      ],
      noParse: []
    },
    resolve: {
      alias: {
        underscore: 'lodash',
        backbone: 'exoskeleton',
        jquery: path.join(__dirname, 'src', 'js', 'monkey-patches', 'no-jquery')
      }
    }
  };

  if (process.env.NODE_ENV === 'production') {
    console.log('webpack: production mode');
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    });

    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    //config.plugins.push(new webpack.optimize.DedupePlugin());

    config.resolve.alias.moment = 'moment/min/moment.min';
    config.module.noParse.push(/moment\.min\.js$/);

    config.resolve.alias.react = 'react/dist/react-with-addons.min';
    config.module.noParse.push(/react-with-addons\.min\.js$/);
  } else {
    // rebuild each time:
    config.resolve.alias.react = 'react/addons';
    //config.resolve.alias.react = 'react/dist/react-with-addons';
    //config.module.noParse.push(/react-with-addons\.js$/);

    config.devtool = 'eval';
  }

  return config;
};
