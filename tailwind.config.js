/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [ {
      lemonade : {
        ...require("daisyui/src/theming/themes")["lemonade"],
        neutral:"white",
        primary:"grey"
      }, },
      {synthwave : {
        ...require("daisyui/src/theming/themes")["synthwave"],
        accent:"purple",
        primary:"white"

      }}
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

