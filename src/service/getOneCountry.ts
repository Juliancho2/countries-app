const getOneCountry = async (country:string) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await res.json()
        return data
    }catch(err){
        throw new Error(err as string)
    }
}

export default getOneCountry