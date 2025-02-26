/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppines: ["Poppins", 'serif'], // Default font
        opensans: ["Open Sans", 'serif'], // For headings or specific elements
      },

      colors: {
        primary: "hsl(322, 100%, 66%)",
        primaryActive:"hsl(322, 100%, 66% , .6)",
        lightCyan: "hsl(193, 100%, 96%)",
        DarkCyan: "hsl(192, 100%, 9%)",
        bluishGary: "hsl(208, 11%, 55%)",
      },
      
    }
  },
  plugins: [],
}

