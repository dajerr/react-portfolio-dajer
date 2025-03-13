import { motion } from 'framer-motion';

export function CardProyectos({ chipUno, chipColorUno, title, img, altImg, link }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1a1a1a81] w-[300px] sm:w-[320px] rounded-xl overflow-hidden shadow-lg shadow-yellow-800/30 border border-teal-900/30 transition-colors hover:border-teal-500/50"
        >
            <div className="relative group overflow-hidden">
                <div className="overflow-hidden">
                    <img 
                        className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" 
                        src={img} 
                        alt={altImg} 
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-lg font-semibold px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm"
                    >
                        Ver Detalles
                    </motion.span>
                </div>
            </div>
            
            <div className="p-4">
                <div className="flex gap-2 mb-3">
                    <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${chipColorUno} bg-opacity-20`}
                    >
                        {chipUno}
                    </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <div className="flex justify-between items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-teal-400 text-sm hover:text-teal-300 transition-colors"
                        href={link || '#'}
                        target={link ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Demo en vivo →
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 text-sm hover:text-gray-300 transition-colors cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                        href="https://github.com/dajerr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub →
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}