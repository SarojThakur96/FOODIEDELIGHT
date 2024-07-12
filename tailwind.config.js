/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AvenirBlack: ["AvenirBlack"],
        AvenirMediam: ["AvenirMediam"],
        AvenirLTProHeavy: ["AvenirLTProHeavy"],
        AvenirLTProLight: ["AvenirLTProLight"],
        AvenirLTProHeavyOblique: ["AvenirLTProHeavyOblique"],
      },
      colors: {
        SidebarNormal: "#231F20",
        SidebarActive: "#383838",
        disable: "#EEEEEE",
        disableText: "#939393",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
