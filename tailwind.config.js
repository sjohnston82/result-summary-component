// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cfont: ["var(--font-cfont)"],
      },
      colors: {
        lightslateblue: "hsl(252, 100%, 67%)",
        lightroyalblue: "hsl(241, 81%, 54%)",
        violet: "hsla(256, 72%, 46%, 1)",
        persianblue: "hsla(241, 72%, 46%, 0)",
        greenteal: "hsl(166, 100%, 37%)",
        darkgrayblue: "hsl(224, 30%, 27%)",
        lightlavender: "hsl(241, 100%, 89%)",
        paleblue: "hsl(221, 100%, 96%)",
        cobaltblue: "hsl(234, 85%, 45%)",
        lightred: "hsl(0, 100%, 67%)",
        lightreda: "hsla(0, 100%, 67%, .3)",
        orangeyyellow: "hsl(39, 100%, 56%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
