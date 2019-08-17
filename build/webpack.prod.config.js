module.exports = config => {
  config.devtool = false;
  config.externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios'
  };
}