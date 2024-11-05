import {CardProyectos} from './CardProyectos'
import ProyectosInfo from '../data/ProyectosInfo'

export function Proyectos() {

  
  const cortado = ProyectosInfo.slice(0,3)

  return (
    <section className="">
      <div>
        <h2 className="text-6xl lg:text-start text-center  font-semibold text-white pb-4 pt-10">Proyectos</h2>
      </div>

      <div className='mt-8 mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {cortado.map((proyecto)=> (

        <CardProyectos
        key={proyecto.id}
        chipUno={proyecto.chipUno}
        chipColorUno={proyecto.chipColorUno}
        title={proyecto.title}
        img={proyecto.img}
        altImg={proyecto.altImg}
        
        />

      ))}
      
      </div>
      
    </section>
  )
}

