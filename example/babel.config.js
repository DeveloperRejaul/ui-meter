/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = function (api) {
 api.cache(true);
 return getConfig(
  {
   presets: [
    ['babel-preset-expo'],
   ],
   plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
   ],
  },
  { root, pkg }
 );
};
