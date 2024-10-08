const sharedConfig = require('@mnfst-kit/shared-components/tailwind.config.js');
const colors = require('tailwindcss/colors');

module.exports = {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared-components/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': colors.orange,
      },
    },
  },
}