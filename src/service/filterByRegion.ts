import getCountries from "./getAllCountries.js"


const filterByRegion = async (region: string) => {
    let data
    if (!region) return
    try {
        if (region === 'All') {
            const countries = await getCountries()
            data = await countries;
            return data
        }
        else {
            const filteredCountries = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            data = await filteredCountries.json()
            return data
        }

    } catch (err) {
        throw new Error(err as string)
    }

}

export default filterByRegion