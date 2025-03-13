import Css from '../../assets/logo-css-nuevo.png';
import { Astro, Html, Tailwind, Figma, React, JavaScript } from '../svgs/IconsSvg';
import PersonalInfo from '../../data/PersonalInfo';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Acerca() {
  const technologies = [
    { Icon: Astro, name: 'Astro' },
    { Icon: Tailwind, name: 'Tailwind' },
    { Icon: Html, name: 'HTML' },
    { Icon: Figma, name: 'Figma' },
    { Icon: React, name: 'React' },
    { Icon: JavaScript, name: 'JavaScript' },
    { img: Css, name: 'CSS' }
  ];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-start text-center font-semibold text-white pb-4 pt-10 font-mono">
          Acerca de mí
        </h1>
      </motion.div>

      <div className="mt-12 grid grid-cols-12 text-white gap-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 col-span-12 lg:col-span-4 p-8 rounded-3xl bg-slate-950/30 border border-yellow-500 shadow-xl shadow-yellow-800/20"
        >
          {technologies.map(({ Icon, img, name }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              {Icon ? (
                <Icon w={34} h={34} />
              ) : (
                <img src={img} className="w-9" alt={name} />
              )}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/80 px-2 py-1 rounded">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 lg:col-span-8 p-8 rounded-3xl bg-slate-950/30 border border-yellow-500 shadow-xl shadow-yellow-800/20"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-400">{PersonalInfo.name}</h2>
            <p className="text-gray-300 leading-relaxed">{PersonalInfo.description}</p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-yellow-500/10 border border-yellow-500 rounded-lg text-yellow-400 hover:bg-yellow-500/20 transition-colors"
              >
                Descargar CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}