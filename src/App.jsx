import { Route, Routes } from "react-router-dom"
import { Inicio } from './Pages/Inicio'
import { Acerca } from "./Pages/Acerca"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/acerca-de-mi" element={<Acerca/>}/>
    </Routes>
    
  )
}

export default App
