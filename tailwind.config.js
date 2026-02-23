/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ['"Oswald"', "sans-serif"],
      drama: ['"Zilla Slab"', "serif"],
      data: ['"Share Tech Mono"', "monospace"],
    },
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#121212',
          light: '#2a2a2a'
        },
        volt: {
          DEFAULT: '#DFFF00',
        },
        ash: {
          DEFAULT: '#F3F4F6',
        },
        matte: {
          DEFAULT: '#050505',
        }
      },
      borderRadius: {
        'fluid': '2rem',
        'fluid-lg': '3rem',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
