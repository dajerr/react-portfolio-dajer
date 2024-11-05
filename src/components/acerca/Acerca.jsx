import { Css } from '../svgs/Css'
import { Astro } from '../svgs/Astro'
import { Html } from '../svgs/Html'
import { Tailwind } from '../svgs/Tailwind'
import { Figma } from '../svgs/Figma'
import { React } from '../svgs/React'
import PersonalInfo from '../../data/PersonalInfo'



export function Acerca() {

  return (
    <section className="py-12">

      <div>

        <h1 className="text-6xl lg:text-start text-center  font-semibold text-white pb-4 pt-10">Acerca de mi</h1>

      </div>

      <div className="mt-12 grid grid-cols-12 text-white gap-3 [&>*]:rounded-3xl [&>*]:shadow-xl [&>*]:shadow-yellow-800/20 [&>*]:md:h-[200px] [&>*]:bg-slate-950/30 [&>*]:border-yellow-500 [&>*]:border">
        <div className="flex justify-center items-center gap-2 flex-wrap col-span-12 lg:col-span-4  p-6">
          <Css />
          <Astro />
          <Tailwind />
          <Html />
          <Figma />
          <React/>
        </div>
        <div className="col-span-12 lg:col-span-8  p-6">
          <legend className='italic text-lg'>{PersonalInfo.name}:</legend>
          <br />
          <p>{PersonalInfo.description}</p>
        </div>

      </div>


    </section>
  )
}