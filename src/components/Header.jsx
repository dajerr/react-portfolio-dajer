
import { AvatarDajer } from "./AvatarDajer"
import { motion } from "framer-motion"

export function Header() {

    return (
        <header className="flex py-6 justify-center items-center mb-8 px-30" >
            <div className="flex flex-col gap-y-12 items-center">

                <div className="relative group">

                    <motion.span
                        className="text-4xl font-bold text-white hover:scale-105 duration-100 ease-in-out transition"
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: 1.2 }}
                    >
                        <h1>
                        Dajer.dev
                        </h1>
                    </motion.span>
                    <span className="absolute bg-black px-2 py-1 text-center w-fit min-w-[180px]  -bottom-8 left-1/2 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href="https://github.com/dajerr" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">ir a Github</a>
                    </span>
                </div>
                <AvatarDajer />

            </div>
        </header>
    )
}