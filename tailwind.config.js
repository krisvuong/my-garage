/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
    "./app/(tabs)/meditate.tsx",
    "./app/(tabs)/about-vehicle.tsx",
    "./app/(tabs)/find-vehicle.tsx",
  ],
  theme: {
    extend: {
        fontFamily: {
            rmono: ["Roboto-Mono", "sans-serif"],
        },
    },
  },
  plugins: [],
}

