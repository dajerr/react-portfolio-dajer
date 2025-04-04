const ProyectosInfo = [
    {
        id: 1,
        chipUno: "React",
        chipColorUno: "warning",
        title: "Página web Artista",
        img: '/imagenes/screen-herrerart-new.png', 
        imgModal: '/imagenes/fullpage-herrerart-new.png',
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
        chipUno: "Astro",
        chipColorUno: "success",
        title: "Mirthax creadora de Vtubers",
        img: '/imagenes/mirthax-screen.png',
        imgModal: "/imagenes/mirthax-fullpage.png",
        altImg: "Imagen de mi proyecto de React",
        description: "Proyecto desarrollado con Astro y TailwindCss, enfocado en la creación de Vtubers de la creadora Mirthax. Un portafolio dirigido a clientes de habla hispana e inglesa.",
        used: [{id: 1, usado: "Astro"},{id: 2, usado: "TailwindCSS"}],
        link: "https://mirthax.vercel.app"
      },
]

export default ProyectosInfo;