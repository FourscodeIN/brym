/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        serif: ['Literata', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'header-code': "url('/brym/assets/images/coder-graphics-code-stfmfwdop1zp1tm8.webp')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },

  safelist: [
    "text-orange-500",  // HTML5
    "text-blue-500",    // CSS3
    "text-yellow-400",  // JavaScript
    "text-indigo-500",  // SQL / MySQL
    "text-red-500",     // Git
    "text-sky-400",     // Docker
    "text-red-600",     // Laravel
    "text-green-500",   // Vue.js
    "text-green-600",   // Node.js
    "text-purple-500",  // .NET

    "bg-accent", "bg-indigo-600", "hover:bg-indigo-700", "bg-blue-500",
    "hover:bg-[#0062D1]", "bg-blue-600", "hover:bg-blue-700",
    "bg-[#58a6ff]", "text-white", "text-gray-800", "bg-gray-300",
    "text-emerald-600", "text-indigo-700"
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        miportafolio: {
          "primary": "#2563eb",
          "secondary": "#64748b",
          "accent": "#1e40af",
          "neutral": "#1e293b",
          "base-100": "#f9fafb",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ],
  },
};


