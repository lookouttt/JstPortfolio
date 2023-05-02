/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'mh-img': 'url("../src/app/assets/img/music_historeum.jpg")',
            'dbd-img': 'url("../src/app/assets/img/DBD.jpg")'
        },
        colors: {
            gray: {
                '900': '#0f1011'
            }
        },
        minHeight: {
            '14': '3.5rem'
        },
        minWidth: {
            '14': '3.5rem'
        },
        transitionTimingFunction: {
            'in-out': 'cubic-bezier(0.2, 1, 0.25, 1)'
        }
    },
    fontFamily: {
        allison: ["Allison", "cursive"],
        sans: ['Roboto', "sans-serif"],
        serif: ['Roboto Slab', "serif"],
    },
  },
  plugins: [],
}

