/* eslint-disable no-undef */
module.exports = {
  content: [
    './templates/**/*.html',
    './src/**/*.{html,vue,js,ts}',
  ],
  mode: 'jit',
  prefix: 'app-',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
