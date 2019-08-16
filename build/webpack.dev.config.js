
module.exports = config => {
  config.output.publicPath = '/';
  config.devServer = {
    host: 'project-with-vue-cli3.qschou.com',
    port: '8080',
  };
}