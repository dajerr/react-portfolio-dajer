import { useState } from "react";
import { ContactPost } from "../../service/ContactPost";

export function Contact() {

    const [ formData, setFormData ] = useState({
        nombre: "",
        email: "",
        asunto: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handledSubmit = async (e) => {
        e.preventDefault()
        const response = await ContactPost.postMessage(formData);

        if(response.error){
            setFormData({   nombre: "", email: "", asunto: "" })
            return alert(response.error)
        }

        alert(response.mensaje || "✅ Mensaje enviado con éxito")
        setFormData({ nombre: "", email: "", asunto: "" })
    }


    return (
        <>
            <section className="h-full md:h-[90vh]">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-center  font-semibold text-white pb-4 pt-10 font-mono">Contáctame</h2>
                    <div className="flex mx-4 flex-col md:flex-row text-white pt-12 lg:pt-28 mb-12">

                        <div className="md:flex-1 items-center py-12 md:py-2 md:items-start flex-col flex justify-center">
                            <p className="pb-8">Deseas colaborar conmigo? </p>
                            <ul className="flex flex-col gap-3 font-semibold font-mono text-xl">
                                <li><a className="text-blue-700" href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                                <li><a className="text-rose-700" href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer">CV</a></li>
                            </ul>

                        </div>
                        <div className="md:flex-1 items-center flex justify-center mb-6 ">
                            <form onSubmit={handledSubmit} className="flex flex-col gap-3 w-[260px] md:w-[340px]">
                                <input name="nombre" onChange={handleChange} value={formData.nombre} className="rounded-md px-3 py-2 bg-[#00000048] border border-yellow-500" type="text" placeholder="Nombre" />
                                <input name="email" onChange={handleChange} value={formData.email} className="rounded-md px-3 py-2 bg-[#00000048] border border-yellow-500" type="email" placeholder="Email" />
                                <input name="asunto" onChange={handleChange} value={formData.asunto} className="rounded-md px-3 py-2 bg-[#00000048] border border-yellow-500" type="text" placeholder="Contenido" />
                                <button type="submit" className="border border-yellow-500 px-3 py-1">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
