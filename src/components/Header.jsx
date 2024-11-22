
import { AvatarDajer } from "./AvatarDajer"

export function Header(){

    return(
        <header className="flex py-5 justify-center items-center mb-8 px-30" >
            <div className="flex flex-col gap-y-4 items-center">
                
                <span className="text-4xl font-bold text-white hover:scale-105 duration-100 ease-in-out transition">
                    <a href="#">Dajer.dev</a>
                </span>
                <AvatarDajer/>
             
            </div>
        </header>
    )
}