var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
	devServer: {
		port: 8001,
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
		hot: true,
		noInfo: true,
		clientLogLevel: "error"
  }
}


/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
} else {
	config.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = config;
