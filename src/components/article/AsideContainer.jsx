import { Tailwind, Astro, React } from "../svgs/IconsSvg"
import { AsideArticles } from "./AsideArticles"
import { motion } from "framer-motion"




export function AsideContainer() {

    return (
        <motion.aside 
            className="bg-[#131313] border rounded-xl mx-auto max-w-[320px] h-full lg:w-[400px] text-white py-7 px-5"
            initial={{ opacity: 0, x: 150 }}    
            animate={{ opacity: 1, x: 0}}
            transition={{ease: "easeInOut", duration: 1.2}}
            
        >
            <h1 className="text-white text-2xl lg:text-4xl mb-2 font-bold">Frameworks</h1>
            <p className="text-sm text-white/80">que mas he utilizado para mis proyectos</p>
            <div className="flex gap-x-2 items-center h-[80px] border-b-2 pt-4 last:border-none">
                <AsideArticles title='Astro' />
                <Astro
                    w={24}
                    h={28} />
            </div>
            <div className="flex gap-x-2 items-center h-[80px] border-b-2 pt-4 last:border-none">
                <AsideArticles title='TailwindCSS' />
                <Tailwind
                    w={28}
                    h={26} />
            </div>
            <div className="flex gap-x-2 items-center h-[80px] border-b-2 pt-4 last:border-none">
                <AsideArticles title='React' />
                <React
                    w={24}
                    h={28} />
            </div>

        </motion.aside>

    )
}