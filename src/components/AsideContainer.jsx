import { AsideArticles } from "./AsideArticles"


export function AsideContainer(){

    return(
        <aside className="bg-[#131313] border rounded-xl w-full h-full lg:w-[400px] text-white py-7 px-5">
            <h1 className="text-white text-2xl lg:text-4xl mb-2 font-bold">Frameworks</h1>
            <p className="text-sm text-white/80">que mas he utilizado para mis proyectos</p>

            <AsideArticles title='TailwindCSS'/>
            <AsideArticles title='Astro'/>
            <AsideArticles title='React'/>

        </aside>

    )
}