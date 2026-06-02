/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eff8fb',
          100: '#d6eef4',
          200: '#aedde9',
          300: '#7cc5d8',
          400: '#46a4c0',
          500: '#2c87a6',
          600: '#256d8c',
          700: '#225872',
          800: '#22495e',
          900: '#203e50',
        },
        seafoam: {
          50: '#f0faf6',
          100: '#d9f2e7',
          200: '#b4e5d2',
          300: '#84d0b6',
          400: '#54b495',
          500: '#36997b',
          600: '#287a63',
          700: '#226251',
          800: '#1e4e42',
          900: '#1a4138',
        },
        sand: {
          50: '#fbf9f4',
          100: '#f4eede',
          200: '#e9dcbd',
          300: '#dbc596',
          400: '#cdab6e',
          500: '#c2965a',
          600: '#b4814e',
          700: '#966642',
          800: '#7a543b',
          900: '#644633',
        },
        coral: {
          50: '#fef4f1',
          100: '#fde6df',
          200: '#fbd0c3',
          300: '#f7b099',
          400: '#f08e72',
          500: '#e56a4c',
          600: '#d24f32',
          700: '#b03f28',
          800: '#923725',
          900: '#793224',
        },
        driftwood: '#9b8c7a',
        peach: '#f6c9a8',
        coastalwhite: '#fdfcf9',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.7' }],
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(34, 73, 94, 0.25)',
        card: '0 8px 30px -12px rgba(34, 73, 94, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'ocean-fade': 'linear-gradient(160deg, #eff8fb 0%, #d9f2e7 60%, #f4eede 100%)',
        'sunset-fade': 'linear-gradient(120deg, #f6c9a8 0%, #fde6df 50%, #d6eef4 100%)',
      },
      transitionTimingFunction: {
        gentle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
