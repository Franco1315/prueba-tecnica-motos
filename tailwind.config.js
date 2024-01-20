/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        'fuente':['Exo 2', 'sans-serif'],
      },
      colors:{
          yellow: '#E2E200',
          dark: '#151515',
          colorBordes: '#DFDDDA',
          colorScrollbar: '#E2E2E2',
          contenidoCatalogo: '#A1A1A1',
          yellowMoto: '#EBF227',
          redMotos: '#F94711'
      },
    },
  },
  plugins: [],
}

