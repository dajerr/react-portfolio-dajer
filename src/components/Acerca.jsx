import { Css } from './svgs/Css'
import { Astro } from './svgs/Astro'
import { Html } from './svgs/Html'
import { Tailwind } from './svgs/Tailwind'
import { Figma } from './svgs/Figma'


export function Acerca() {

  return (
    <section className="py-12">

      <div>

        <h1 className="text-6xl lg:text-start text-center  font-semibold text-white pb-4 pt-10">Acerca de mi</h1>

      </div>

      <div className="mt-12 grid grid-cols-12 text-white gap-3 [&>*]:rounded-3xl [&>*]:shadow-xl [&>*]:shadow-yellow-800/20 [&>*]:md:h-[200px] [&>*]:bg-slate-950/30 [&>*]:border-yellow-500 [&>*]:border">
        <div className="flex justify-start items-start gap-2 flex-wrap col-span-4 lg:col-span-4  p-6">
          <Css/>
          <Astro/>
          <Tailwind/>
          <Html/>
          <Figma/>
        </div>
        <div className="col-span-8 lg:col-span-8  p-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur non nisi   perferendis dolor reprehenderit quibusdam, eius ea commodi dolores voluptates dicta   eaque dolorem numquam, a error nostrum aut ab.</p>
        </div>
        <div className="col-span-12 lg:col-span-7 p-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur non nisi   perferendis dolor reprehenderit quibusdam, eius ea commodi dolores voluptates dicta   eaque dolorem numquam, a error nostrum aut ab.</p>
        </div>
        <div className="col-span-12 lg:col-span-5 p-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur non nisi perferendis dolor reprehenderit quibusdam, eius ea commodi dolores voluptates dicta eaque dolorem numquam, a error nostrum aut ab.</p>
        </div>
      </div>





    </section>
  )
}