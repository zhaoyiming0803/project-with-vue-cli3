
const fs = require('fs');
const path = require('path');
const resolve = dir => path.resolve(__dirname, '../', dir);

module.exports = config => {
  config.output.publicPath = '/';
  config.devServer = {
    host: 'project-with-vue-cli3.com',
    port: '443',
    // https: {
    //   key: fs.readFileSync(resolve('build/ssl/key.pem')),
    //   cert: fs.readFileSync(resolve('build/ssl/crt.pem'))
    // }
  };
}