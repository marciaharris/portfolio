/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [ {
      lemonade : {
        ...require("daisyui/src/theming/themes")["lemonade"],
        neutral:"white"
      }, },
      "synthwave"
  ]
  },
  content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

