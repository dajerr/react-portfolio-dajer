
const api = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export const ContactPost = {
    postMessage: async ({nombre, email, asunto}) => {

        try{
            const response = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey
                },
                body: JSON.stringify({ nombre, email, asunto })
            })

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.error || "Error al enviar el mensaje")
            }

            return data

        }catch(error){
            console.error("Error en postMessage:", error.message);
            return { error: error.message || "❌ Error inesperado"};
        }
    }
}