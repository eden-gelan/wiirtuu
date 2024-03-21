/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'backgroundImage': "url('./src/assets/backgroundupdate.png')" 
      },
      colors : {
        background  : "#0D1C34",
        primary : "#F7941D",
        secondary : "#231F20" ,
        serviceColor: "#1D437E",
        whychooseus : "#1E1E1E",
        whychooseusText : "#F7941D",
        blueBg :'#1D437E',
        blueBgLight :'#385C91',

      },
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1440px',
        // Add your custom breakpoints here
        'custom': '440px', // Example custom breakpoint
      }
    },
  },
  plugins: [require('tailwindcss-text-stroke')],
}

