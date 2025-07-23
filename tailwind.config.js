/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./*.html",          
    "./**/*.html",        
    "./js/**/*.js"    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
    safelist: [
    "bg-accent",
    "text-yellow-400",
    "text-red-600",
    "text-indigo-700",
    "text-emerald-600",
    "text-gray-800",
    "bg-indigo-600",
    "bg-gray-300"
  ],
  daisyui: {
    themes: [
      {
        miportafolio: {
          "primary": "#2563eb",     // Azul profesional
          "secondary": "#64748b",   // Gris azulado
          "accent": "#1e40af",      // Azul oscuro (hover/acciones)
          "neutral": "#1e293b",     // Azul grisáceo oscuro (header/footer)
          "base-100": "#f9fafb",    // Fondo principal
          "info": "#3b82f6",        // Azul informativo
          "success": "#10b981",     // Verde éxito
          "warning": "#facc15",     // Amarillo más suave
          "error": "#ef4444",       // Rojo error
        },
      },
    ],
  },
};


