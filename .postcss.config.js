const postcssPresetEnv = require(`postcss-preset-env`);
const nope = require('postcss-nope');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    nope(),
  ],
})
