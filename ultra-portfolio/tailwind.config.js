// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#090a0b",
        "card-dark": "#111314",
        primary: "#c8ff45",
        secondary: "#6ba7ff",
        accent: "#b8ef72",
        neon: "#d19cff",
        shell: "#f4f5f2",
      },
      boxShadow: {
        "soft-card": "0 18px 45px rgba(0, 0, 0, 0.24)",
        neon: "0 12px 28px rgba(200, 255, 69, 0.12)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
