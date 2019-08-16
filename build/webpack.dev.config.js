
module.exports = config => {
  config.output.publicPath = '/';
  config.devServer = {
    host: 'project-with-vue-cli3.com',
    port: '8080',
  };
}