const api = import.meta.env.VITE_API_URL

export async function sendPost(datos){
    try {
        const response = await fetch(api, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })

        const data = await response.json()

        if(!response.ok){
            throw new Error(data.error || "Error al crear cliente");
        }

        return data
    } catch (error) {
        console.error(error)
    }
}