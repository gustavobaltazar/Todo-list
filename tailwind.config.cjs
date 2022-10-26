/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      fontSize: {
        '2xl': ['2.5rem',{
          fontWeight: '800',
          letterSpacing: '-0.01em',
          lineHeight: '2rem',
        }],
      },
      colors: {
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        gray7: "#0D0D0D",
        gray6: "#1A1A1A",
        gray5: "#262626",
        gray4: "#333333",
        gray3: "#808080",
        gray2: "#D9D9D9",
        gray1: "#F2F2F2",
        danger: "#E25858",
      }
    },
  },
  plugins: [],
}
