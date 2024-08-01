/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const root = path.resolve(__dirname, '..');

module.exports = {
 // NOTE: Update this to include the paths to all of your component files.
 content: [`${root}**/*.{js,jsx,ts,tsx}`],
 presets: [require('nativewind/preset')],
 theme: {
  extend: {},
 },
 plugins: [],
};