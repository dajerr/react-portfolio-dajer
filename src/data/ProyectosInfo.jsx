const ProyectosInfo = [
    {
        id: 1,
        chipUno: "React",
        chipColorUno: "warning",
        title: "Página web Artista",
        img: '/imagenes/herrerart-proyecto.webp', 
        imgModal: '/imagenes/fullPage-herrerart.png',
        altImg: "Imagen de la página web herrerart",
        description: "proyecto freelance hecho con ReactJs y TailwindCSS, manejando Hooks como useState, useEffect. También manejo de información en json y partes dinámicas en la Página web",
        used: [{id: 1, usado: "React"},{id: 2, usado: "Tailwind"},{id: 3, usado: "Vite"}],
        link: "https://herrerart.vercel.app/"
      },
      {
        id: 2,
        chipUno: "HTML",
        chipColorUno: "danger",
        title: "Wild Rift TierList",
        img: '/imagenes/iwildrift-proyect.webp',
        imgModal: '/imagenes/iwildrift-proyect.webp',
        altImg: "Imagen de Wild Rift TierList",
        description: "unos de mis primeros proyectos en cuanto a la creación de páginas web tambien partes dinámicas en la misma donde hago un filtrado de campeones con los ranks del juego wild rift",
        used: [{id: 1, usado: "HTML"},{id: 2, usado: "TailwindCSS"},{id: 3, usado: "JavaScript"}],
        link: "https://wildrift-dajer.vercel.app/"
      },
      {
        id: 3,
        chipUno: "React",
        chipColorUno: "success",
        title: "Mi Proyecto de React",
        img: '',
        altImg: "Imagen de mi proyecto de React",
        description: "",
        link: ""
      },
]

export default ProyectosInfo;