const { parsed: localEnv } = require('dotenv').config();
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const webpack = require('webpack')
const { ANALYZE: should_analyze } = process.env

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' }
    }
  },
  webpack(cfg, options) {
    cfg.plugins = 
      cfg.plugins
      .filter(
        plugin => plugin.constructor.name !== "UglifyJsPlugin"
      )
      .concat([
        new webpack.EnvironmentPlugin(localEnv)
      ]);

    return cfg;
  }
}