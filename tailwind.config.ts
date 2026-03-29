import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#DBEAFE",
          foreground: "#3B82F6",
        },
        muted: {
          DEFAULT: "#E0E7FF",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
          primary: "#3B82F6",
          "primary-foreground": "#FFFFFF",
          accent: "#DBEAFE",
          "accent-foreground": "#3B82F6",
          border: "#334155",
          ring: "#3B82F6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
            fontFamily: {
              sans: ["Inter", "Poppins", "system-ui", "-apple-system", "sans-serif"],
            },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.5)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "radar-sweep": "radar-sweep 3s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
