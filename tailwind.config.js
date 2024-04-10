/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      'bluesd': '#1C3144',
      'yellowsd': '#FFBA08',
      'gray-darksd': '#273444',
      'graysd': '#EFEFEF',
      'gray-lightsd': '#d3dce6',
    },
    fontFamily: {
      'nourd': ['Nourd', 'sans'],
      'rubik': ['Rubik', 'sans']
    }
  },
  plugins: [],
});