const api = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

const TIMEOUT_DURATION = 20000; // 20 segundos de timeout

export const ContactPost = {
    postMessage: async ({nombre, email, asunto}) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

        try{
            const response = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey
                },
                body: JSON.stringify({ nombre, email, asunto }),
                signal: controller.signal
            })

            clearTimeout(timeoutId);

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.error || `Error ${response.status}: ${response.statusText}`);
            }

            return data

        }catch(error){
            console.error("Error en postMessage:", error);
            
            if (error.name === 'AbortError') {
                return { 
                    error: "La solicitud tardó demasiado tiempo. Por favor, inténtalo de nuevo." 
                };
            }

            return { 
                error: error.message || "❌ Error inesperado al enviar el mensaje" 
            };
        }
    }
}