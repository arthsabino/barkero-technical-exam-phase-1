/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-touch": "var(--primary-touch)",
        secondary: "var(--secondary)",
        warning: "var(--warning)",
        grey: "var(--grey)",
      },
      height: {
        navh: "var(--nav-height)",
      },
      minHeight: {
        navh: "var(--nav-height)",
      },
      margin: {
        navh: "var(--nav-height)",
        sidew: "var(--side-width)",
      },
      padding: {
        navh: "var(--nav-height)",
      },
      width: {
        sidew: "var(--side-width)",
      },
      spacing: {
        navh: "var(--nav-height)",
        sidew: "var(--side-width)",
      }
    },
  },
  plugins: [],
}

