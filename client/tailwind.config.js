/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myred: "#E63946",
        mycyan: "#008B8B",
        myamber: "#FFC300",
        mypurple: "#6A0572",
        myindigo: "#3D348B",
        myteal: "#047857",
        myblack: "#1C1C1E",
        mygray: "#4E4E50",
        myoffwhite: "#F5F5F5",
      },
      fontFamily: {
        Park: ['Parkinsans'],
        Hachi: ['Hachi Maru Pop'],
      }
    },
  },
  plugins: [],
}