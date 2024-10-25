import { Link } from 'react-router-dom'

export function NavBar(){
    return(
        <>
        <ul className="w-72 text-white text-[16px] hidden sm:flex justify-around">
            <Link to="/" className="hover:text-yellow-400 duration-100 ease-in-out transition">Inicio</Link>
           <Link to="/proyectos" className="hover:text-yellow-400 duration-100 ease-in-out transition">Proyectos</Link>
            <Link to="/acerca-de-mi" className="hover:text-yellow-400 duration-100 ease-in-out transition">Acerca</Link>
        </ul>

        <button className="flex sm:hidden">
            Menu
        </button>
        </>



    )
}