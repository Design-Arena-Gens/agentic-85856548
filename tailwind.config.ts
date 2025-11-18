import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["'Fira Code'", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        glow: "0 0 45px rgba(59, 130, 246, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
