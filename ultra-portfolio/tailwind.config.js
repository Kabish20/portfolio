// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        "card-dark": "#0b1220",
        primary: "#6366f1",
        "primary-soft": "#4f46e5",
        accent: "#22c55e",
        neon: "#a855f7",
      },
      boxShadow: {
        "soft-card": "0 18px 45px rgba(0,0,0,0.45)",
        neon: "0 0 30px rgba(99,102,241,0.5)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
