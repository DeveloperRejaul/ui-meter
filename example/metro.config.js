/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');
const root = path.resolve(__dirname, '..');

const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
// module.exports = withNativeWind(config, { input: './global.css' });

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = getConfig(withNativeWind(config, { input: './global.css' }), {
 root,
 pkg,
 project: __dirname,
});
