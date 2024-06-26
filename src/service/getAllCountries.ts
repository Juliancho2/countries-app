const getCountries = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json()
        return data
    }catch(err){
        throw new Error(err as string)
    }
}

export default getCountries
