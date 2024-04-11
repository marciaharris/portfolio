/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [{
      valentine: {
        ...require("daisyui/src/theming/themes")["valentine"],
        neutral: "white",
        primary: "grey"
      },
    },
    {
      synthwave: {
        ...require("daisyui/src/theming/themes")["synthwave"],
        accent: "purple",
        primary: "white"

      }
    }
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  variants: {
    theme: {
      extend: {
        backgroundImage: {
          'parallax': 'url("../public/clouds.png")'
        }
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

