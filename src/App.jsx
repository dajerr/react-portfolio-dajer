import { Header } from "./components/Header"
import { ArticleMain } from "./components/article/ArticleMain"
import { AsideContainer } from "./components/article/AsideContainer"
import { Proyectos } from "./components/Proyectos"
import { Acerca } from "./components/acerca/Acerca"
import { Footer } from "./components/footer/Footer"
import { Contact } from "./components/contactame/contact"


function App() {

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-2">

        <Header />
        
        <div className="md:flex gap-4 flex-row">

          <ArticleMain />

          <AsideContainer />

        </div>

        <Proyectos />

        <Acerca />

      </section>

      <Contact />

      <Footer />

    </>
  )
}

export default App
