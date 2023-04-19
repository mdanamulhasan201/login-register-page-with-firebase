/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#31ce80",
        
"secondary": "#73b8d1",
        
"accent": "#2e61ad",
        
"neutral": "#1D191F",
        
"base-100": "#F7F2F8",
        
"info": "#5094D3",
        
"success": "#5CEBDC",
        
"warning": "#EB8305",
        
"error": "#EA718D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

