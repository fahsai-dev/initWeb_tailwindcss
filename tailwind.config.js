const COLOR = require('./constants/COLOR');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs':'425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundColor: theme => ({ ...theme('colors'), ...COLOR }),
    textColor: theme => ({ ...theme('colors'), ...COLOR }),
    borderColor: theme => ({ DEFAULT: theme('colors.gray.300', 'currentColor'), ...COLOR }),
    fontFamily: {
      'reg': ['Prompt-Regular'],
      'med': ['Prompt-Medium'],
      'bold': ['Prompt-SemiBold'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['18px', '26px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['40px', '48px'],
      '3xl': ['48px', '54px'],
      '4xl': ['60px', '68px'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
