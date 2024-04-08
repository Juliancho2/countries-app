export type Currencies = {
    name: string;
    symbol: string;
}

export type NameCountry = {
    common: string;
    official: string;
}

export type Flags= {
    png:string
    svg:string
    alt:string
}

type Languages = {
    name: string
    nativeName: string
}
export type CountryData = {
    name: NameCountry;
    flags: Flags;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string[];
    currencies: Currencies;
    languages:Languages;
    borders?: string[];
}