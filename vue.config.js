/**
 * vue-cli3 自定义配置
 * @author zhaoyiming
 * @since  2019/08/16
 */

const webpackDevConfig = require('./build/webpack.dev.config');
const webpackProdConfig = require('./build/webpack.prod.config');

const configure = {
  development: config => webpackDevConfig(config),
  production: config => webpackProdConfig(config)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/project-with-vue-cli3/'
    : '/',
  configureWebpack: config => configure[process.env.NODE_ENV](config),
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');

    config.plugin('inline-source')
      .use(require('html-webpack-inline-source-plugin'));

    config.plugin('script-ext')
      .use(require('script-ext-html-webpack-plugin'), [{
        defaultAttribute: 'defer'
      }])
      .after('html');

    config
      .plugin('html')
      .tap(args => {
        args[0].inlineSource = '.app.*.(css|js)';
        args[0].minify = undefined;
        args[0].var = {
          isProd: process.env.npm_lifecycle_event === 'build'
        }
        return args;
      });
  }
};
