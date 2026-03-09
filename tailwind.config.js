module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#001F3F",
          800: "#003d5c",
          700: "#005a7f",
        },
        luxury: {
          dark: "#0a0a0a",
          light: "#F8F9FA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px rgba(0, 0, 0, 0.1)",
        "luxury-sm": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "luxury-lg": "0 20px 50px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
