const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 5000,
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
      name: 'shell',
      remotes: {
        dashboard: 'dashboard@http://localhost:5001/remoteEntry.js',
        profile: 'profile@http://localhost:5002/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: '19.1.0"' },
        'react-dom': { singleton: true, eager: false, requiredVersion: '19.1.0"' }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
`   `