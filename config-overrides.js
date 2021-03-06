const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = function override(config, env) {
  config.resolve.alias = {
    '@': resolve('src'),
    '@/utils': resolve('src/utils'),
    '@/components': resolve('src/components'),
    '@/pages': resolve('src/pages'),
  }
  return config;
}