import { NavBar } from "./NavBar"
import { AvatarDajer } from "./AvatarDajer"

export function Header(){

    return(
        <header className="flex py-3 justify-between items-center mb-8 px-30" >
            <div className="flex gap-x-4 items-center">
                <AvatarDajer/>
                <span className="text-4xl font-bold text-white hover:scale-105 duration-100 ease-in-out transition">
                    <a href="#">Dajer.dev</a>
                </span>
                
            </div>
            <NavBar/>
        </header>
    )
}