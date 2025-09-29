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
        'header-code': "url('/brym/assets/images/coder-graphics-code-stfmfwdop1zp1tm8.wepb')",
        // 'header-code': "url('/assets/images/coder-graphics-code-stfmfwdop1zp1tm8.jpg')",
      },
     keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
    safelist: [
    "bg-accent", "text-yellow-400", "text-red-600",
    "text-indigo-700", "text-emerald-600", "text-gray-800",
    "bg-indigo-600", "bg-gray-300", "bg-blue-500",
    "hover:bg-[#0062D1]", "bg-blue-600", "hover:bg-blue-700",
    "bg-indigo-600", "hover:bg-indigo-700","bg-[#58a6ff]",
    "text-white",
  ],
  daisyui: {
    themes: [
      {
        miportafolio: {
          "primary": "#2563eb",     // Azul profesional
          "secondary": "#64748b",   
          "accent": "#1e40af",      // Azul oscuro (hover/acciones)
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


