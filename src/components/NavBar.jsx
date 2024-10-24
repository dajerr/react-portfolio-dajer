export function NavBar(){
    return(
        <>
        <ul className="w-72 text-white text-[16px] hidden sm:flex justify-around">
            <a href="#" className="hover:text-yellow-400 duration-100 ease-in-out transition">Inicio</a>
            <a href="#" className="hover:text-yellow-400 duration-100 ease-in-out transition">Proyectos</a>
            <a href="#" className="hover:text-yellow-400 duration-100 ease-in-out transition">Acerca</a>
        </ul>

        <button className="flex sm:hidden">
            Menu
        </button>
        </>



    )
}