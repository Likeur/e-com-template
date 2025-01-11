/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.green,
        danger: colors.rose,
        warning: colors.yellow,
        success: colors.lime,
        info: colors.blue,
        gray: colors.zinc,
      }),
    },
  },
  plugins: [],
};
