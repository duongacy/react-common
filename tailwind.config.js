const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:{
        140:"#0078A0",
        120:'#0090C0',
        80:'#33B9E7',
        60:'#66CAED',
        40:'#99DCF3',
        20:'#CCEDF9',
        10:'#E5F6FC',
        5:'#F2FBFD',
        black:'#293033',
        grey:'#F5F6F7',
        lightGrey:'#FAFBFC',
        white:'#FFFFFF',
        DEFAULT: "#00A7E1"
      },
      secondary:{
        140:"#EB9618",
        120:"#EFAC47",
        80:'#33B9E7',
        60:'#66CAED',
        40:'#99DCF3',
        20:'#CCEDF9',
        10:'#E5F6FC',
        5:'#F2FBFD',
        DEFAULT:"#F3C177"
      },
      black:{
        80:'#54595C',
        60:'#7F8385',
        40:'#A9ACAD',
        20:'#D4D6D6',
        10:'#EAEAEB',
        5:'#F2F3F4',
        DEFAULT:"#00171F"
      },
      error:{
        DEFAULT:'#E03800',
        80:'#E03800CC',
        60:'#E0380099',
        40:'#E0380066',
        20:'#E0380033',
      },
      success:{
        DEFAULT:'#5AB65F',
        80:'#5AB65FCC',
        60:'#5AB65F99',
        40:'#5AB65F66',
        20:'#5AB65F33',
      },
      warning:{
        DEFAULT:'#EDDEA4',
        80:'#EDDEA4CC',
        60:'#EDDEA499',
        40:'#EDDEA466',
        20:'#EDDEA433',
      },
      transparent:{DEFAULT:"transparent"}
    },
    boxShadow: {
      DEFAULT: '0px 38.8889px 24.0116px rgba(0, 0, 0, 0.0227778), 0px 23.1111px 13.0593px rgba(0, 0, 0, 0.0182222), 0px 12px 6.6625px rgba(0, 0, 0, 0.015), 0px 4.88889px 3.34074px rgba(0, 0, 0, 0.0117778), 0px 1.11111px 1.61343px rgba(0, 0, 0, 0.00722222)',
    },
    fontWeight:{
      DEFAULT:'300',
      regular: '300',
      medium: '500',
      bold: '700'
    },
    width: Array.from({ length: 400 }, (_, key) => key * 4).map(item=>({[item]: `${item}px`})).reduce((prev, current)=> ({...prev, ...current}),{'1': '1px', "full":'100%'}),
    spacing: Array.from({ length: 100 }, (_, key) => key * 4).map(item=>({[item]: `${item}px`})).reduce((prev, current)=> ({...prev, ...current}),{}),
    fontFamily: {
      sans:['"Raleway"', 'san-serif'],
      mono: ['"DM mono"', 'monospace' ],
      serif:['"Cormorant Garamond"', 'serif']
    },
    fontSize: {
      h1: ['32px', '40px'],
      h2: ['24px', '20px'],
      h3: ['20px', '20px'],
      h4: ['16px', '20px'],
      body1: ['16px', '24px'],
      body2: ['14px', '20px'],
      body3: ['12px', '18px'],
      label1:['12px', '20px'],
      label2:['10px', '20px'],
      button:['14px', {
        lineHeight:'20px',
        fontWeight: '500'
      }]
    }, 
    borderRadius: Array.from({ length: 15 }, (_, key) => key * 2).map(item=>({[item]: `${item}px`})).reduce((prev, current)=> ({...prev, ...current}),{'full':'9999px'})
  },
  plugins: [
  ],
}