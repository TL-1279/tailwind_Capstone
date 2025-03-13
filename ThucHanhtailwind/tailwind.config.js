/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hr: "#dbd6cf",
        bgGray: "#efeae3",
        primaryRed: "#fe330a",
      },
      animation: {
        "ping-slow": "ping-slow 2s linear infinite",
        "rotate-45": "rotate-45 0.5s linear forwards",
        "move-top": "move-top 0.5s linear forwards",
        rigtToLeft: "rigtToLeft 20s linear infinite",
      },
      gridTemplateColumns: {
        custom: "26% 20% 20% 20%",
      },
      keyframes: {
        "ping-slow": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "rotate-45": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(45deg)",
          },
        },
        "move-top": {
          "0%": {
            transform: "translateY(30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        rigtToLeft: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
