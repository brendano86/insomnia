import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}