import { CardProyectos } from './CardProyectos';
import ProyectosInfo from '../data/ProyectosInfo';
import { useState } from 'react';
import './components.css';

export function Proyectos() {
  const [selectedProyect, setSelectedProyect] = useState(null);
  const [openModal, setOpenModal] = useState(false)



  const cortado = ProyectosInfo.slice(0, 3)

  const btnOpenModal = (proyect) => {
    setSelectedProyect(proyect)
    setOpenModal(true)
  }

  const btnCloseModal = () => {
    setOpenModal(false)
    setSelectedProyect(null)
  }

  return (
    <section className="">
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-start text-center  font-semibold text-white pb-4 pt-10 font-mono">Proyectos</h2>
      </div>

      <div className='mt-8 mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white'>
        {cortado.map((proyecto) => (
          <div className='cursor-pointer' onClick={() => btnOpenModal(proyecto)}>

            <CardProyectos

              key={proyecto.id}
              chipUno={proyecto.chipUno}
              chipColorUno={proyecto.chipColorUno}
              title={proyecto.title}
              img={proyecto.img}
              altImg={proyecto.altImg}
              link={proyecto.link}
            />
          </div>

        ))}

      </div>

      {selectedProyect && openModal && (
        <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 modal ${openModal ? 'show' : ''}`}>
          <div className="bg-[#0d0f0fb0] shadow-2xl shadow-teal-950/30 text-white lg:h-[75vh] max-w-3xl mx-2 flex lg:flex-row flex-col p-4 rounded-lg gap-3">
          {
            selectedProyect.imgModal && (
              <div className='lg:flex-1 flex justify-center'>
                <img className='h-[60vh] lg:h-full ' src={selectedProyect.imgModal} alt="" />
              </div>
            )
          }
            <div className='lg:flex-1 flex flex-col justify-between'>
              <div>

                <h3 className='font-semibold pb-3'>{selectedProyect.title}</h3>
                <p className='text-sm text-gray-300'>{selectedProyect.description}</p>
                <div className='flex gap-2 mt-3'>

                  {selectedProyect?.used?.map((used) => (
                    <span key={used.id} className='text-sm px-2 border border-white rounded-full'>{used.usado}</span>
                  ))}
                  
                </div>

                <a className='lg:block hidden' href={selectedProyect.link} target="_blank" rel="noopener noreferrer"><p className='w-fit mt-4 text-sm px-6 py-2 bg-yellow-500/10 border border-yellow-500 rounded-lg text-yellow-400 hover:bg-yellow-500/20 transition-colors'>Visualizar la Página</p></a>
              </div>
              <div className='flex items-center gap-3'>
                <a href="#" className='lg:hidden'><p className='mt-4'>Ir a la página</p></a>
                <button className="mt-4 px-3 py-1 bg-red-600 text-white rounded" onClick={btnCloseModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

