import {Avatar} from "@nextui-org/react";
import FotoDajer  from '/imagenes/fotoperfil.jpg'
import { motion } from "framer-motion"

export function AvatarDajer(){
    return(
        <motion.img 
            initial={{ scale: 0, y: 20}}
            animate={{ scale: 1, y: 0}}
            transition={{ease: "easeInOut", duration: 1.2}}
            className="w-48 h-48 object-cover rounded-full border-2 border-yellow-500 shadow-2xl shadow-yellow-600/30"
            src={FotoDajer} 
            alt="Foto de dajer como logo" />
    )
}