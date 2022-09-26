module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ["Yeseva One", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
