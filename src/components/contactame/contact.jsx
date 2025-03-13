import { useState } from "react";
import { ContactPost } from "../../service/ContactPost";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const formFields = [
    { name: "nombre", type: "text", placeholder: "Nombre", icon: "👤" },
    { name: "email", type: "email", placeholder: "Email", icon: "📧" },
    { name: "asunto", type: "text", placeholder: "Mensaje", icon: "✍️" }
];

const socialLinks = [
    { name: "LinkedIn", href: "http://", icon: "💼", className: "text-blue-400 hover:text-blue-300" },
    { name: "Instagram", href: "http://", icon: "📸", className: "text-rose-400 hover:text-rose-300" },
    { name: "CV", href: "http://", icon: "📄", className: "text-green-400 hover:text-green-300" }
];

export function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handledSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await ContactPost.postMessage(formData);

            if (response.error) {
                toast.error(response.error);
            } else {
                toast.success(response.mensaje || "✅ Mensaje enviado con éxito");
                setFormData({ nombre: "", email: "", asunto: "" });
            }
        } catch (error) {
            toast.error("❌ Error al enviar el mensaje");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <motion.section
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40}}

                viewport={{
                    once: true,
                    amount: 0.2
                }}
                transition={{ duration: 0.5 }}
                className="min-h-[90vh] py-16"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold text-white pb-4 pt-10 font-mono"
                    >
                        Contáctame
                    </motion.h2>

                    <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                                    ¿Deseas colaborar conmigo?
                                </h3>
                                <p className="text-gray-300">
                                    Estoy siempre interesado en nuevos proyectos y oportunidades.
                                    ¡Contáctame y hagamos algo increíble juntos!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-medium">Encuéntrame en:</h4>
                                <ul className="space-y-3">
                                    {socialLinks.map(({ name, href, icon, className }) => (
                                        <motion.li
                                            key={name}
                                            whileHover={{ x: 5 }}
                                            className="transition-colors"
                                        >
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-3 ${className}`}
                                            >
                                                <span className="text-2xl">{icon}</span>
                                                <span>{name}</span>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-teal-500 rounded-2xl blur-xl opacity-20"></div>
                            <form
                                onSubmit={handledSubmit}
                                className="relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
                            >
                                {formFields.map(({ name, type, placeholder, icon }) => (
                                    <div key={name} className="relative">
                                        <motion.div
                                            animate={{
                                                y: focusedField === name ? -25 : -20,
                                                scale: focusedField === name ? 1.1 : 1,
                                                color: focusedField === name ? "#EAB308" : "#fff"
                                            }}
                                            className="absolute right-3 text-xl"
                                        >
                                            {icon}
                                        </motion.div>
                                        <input
                                            name={name}
                                            type={type}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField(name)}
                                            onBlur={() => setFocusedField(null)}
                                            value={formData[name]}
                                            className="w-full bg-slate-800/50 text-white rounded-xl px-4 py-3 border border-white/10 focus:border-yellow-500/50 outline-none transition-all duration-300"
                                            placeholder={placeholder}
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>
                                ))}

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full relative overflow-hidden group px-4 py-3 rounded-xl font-medium text-white
                                        ${isLoading ?
                                            "bg-yellow-600/30 cursor-not-allowed" :
                                            "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:to-yellow-500"}`}
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:translate-x-full transition-transform duration-300"></span>
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isLoading ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar mensaje
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
