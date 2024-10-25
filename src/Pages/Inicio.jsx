import { Header } from "../components/Header"
import { ArticleMain } from "../components/ArticleMain"
import { AsideContainer } from "../components/AsideContainer"
import { Proyectos } from "../components/Proyectos"

export function Inicio() {

  return (
    <section className="max-w-5xl mx-auto px-4 pt-2">

     <Header/>
     <div className="md:flex gap-4 flex-row">
        
          <ArticleMain/>
        
       
          <AsideContainer/>
        
    </div>

    <Proyectos/>

    
    </section>
  )
}
