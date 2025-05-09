const url = 'https://restcountries.com/v3.1/all'

// busca dos países
export const fetchCountries = async () => {
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Erro na busca")
        }
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)
        return []
    }
}