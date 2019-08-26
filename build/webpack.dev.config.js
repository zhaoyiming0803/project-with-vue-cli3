
const fs = require('fs');
const path = require('path');
const resolve = dir => path.resolve(__dirname, '../', dir);

module.exports = config => {
  config.devServer = {
    host: 'localhost',
    port: '8090',
    // disableHostCheck: true
    // https: {
    //   key: fs.readFileSync(resolve('build/ssl/key.pem')),
    //   cert: fs.readFileSync(resolve('build/ssl/crt.pem'))
    // }
  };
}