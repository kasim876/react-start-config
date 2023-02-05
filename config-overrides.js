const {alias} = require('react-app-rewire-alias');

const aliasMap = {
  '~': 'src',
  '~store': 'src/store',
  '~hooks': 'src/hooks',
  '~utils': 'src/utils',
  '~assets': 'src/assets',
  '~components': 'src/components',
};

module.exports = function override(config) {
  alias(aliasMap)(config);

  return config;
};
