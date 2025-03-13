import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Navegación Desktop */}
            <ul className="w-72 text-white text-[16px] hidden sm:flex justify-around items-center">
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/" className="relative group">
                        <span className="relative z-10">Inicio</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/proyectos" className="relative group">
                        <span className="relative z-10">Proyectos</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/acerca-de-mi" className="relative group">
                        <span className="relative z-10">Acerca</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                </motion.li>
            </ul>

            {/* Botón Menú Móvil */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex sm:hidden flex-col gap-1.5 p-2 focus:outline-none"
            >
                <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block transition-transform"
                ></motion.span>
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white block"
                ></motion.span>
                <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block transition-transform"
                ></motion.span>
            </button>

            {/* Menú Móvil */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full right-0 w-48 py-2 mt-2 bg-slate-900 rounded-lg shadow-xl sm:hidden"
                    >
                        <Link to="/" className="block px-4 py-2 text-white hover:bg-yellow-500/10 transition-colors">
                            Inicio
                        </Link>
                        <Link to="/proyectos" className="block px-4 py-2 text-white hover:bg-yellow-500/10 transition-colors">
                            Proyectos
                        </Link>
                        <Link to="/acerca-de-mi" className="block px-4 py-2 text-white hover:bg-yellow-500/10 transition-colors">
                            Acerca
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}