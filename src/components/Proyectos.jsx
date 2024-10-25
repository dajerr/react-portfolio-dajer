import {CardProyectos} from '../components/CardProyectos'
import herrerartproyecto from '../assets/imagenes/herrerart-proyecto.webp'
import wildriftproyecto from '../assets/imagenes/iwildrift-proyect.webp'

export function Proyectos() {

  return (
    <section className="">
      <div>
        <h2 className="text-6xl lg:text-start text-center  font-semibold text-white pb-4 pt-10">Proyectos</h2>
      </div>

      <div className='mt-8 mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      <CardProyectos
      chipUno="Astro"
      chipColorUno="warning"
      title="Pagina web Artista"
      img={herrerartproyecto}
      altImg="Imagen de la pagina web herrerart"
      
      />
      <CardProyectos
      
      chipUno="HTML"
      chipColorUno="danger"
      title="Wild Rift TierList"
      img={wildriftproyecto}
      

      />
      <CardProyectos
      
      chipColorUno="warning"
      
      />
      </div>
      
    </section>
  )
}

