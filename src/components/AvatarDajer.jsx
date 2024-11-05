import {Avatar} from "@nextui-org/react";
import FotoDajer  from '/imagenes/foto-dajer.jpg'

export function AvatarDajer(){
    return(
        <img 
        className="w-32 rounded-full border-2 border-yellow-500 shadow-2xl shadow-yellow-600/30"
        src={FotoDajer} 
        alt="Foto de dajer como logo" />
    )
}