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
        },
        midnight: {
          DEFAULT: '#0a0a1a',
        }
      },
      borderRadius: {
        'fluid': '2rem',
        'fluid-lg': '3rem',
      },
      boxShadow: {
        'glow-volt': '0 0 40px rgba(223,255,0,0.12), 0 0 80px rgba(223,255,0,0.06)',
        'glow-deep': '0 8px 60px rgba(0,0,0,0.6), 0 0 40px rgba(223,255,0,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
