const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 5002,
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'profile',
      filename: 'remoteEntry.js',
      exposes: {
        './Profile': './src/Profile',
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: '19.1.0"' },
        'react-dom': { singleton: true, eager: false, requiredVersion: '19.1.0"' }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
