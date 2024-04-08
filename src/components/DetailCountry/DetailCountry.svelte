<script lang="ts">
	import type { CountryData } from '../../types/countries.ts';
	import { convertPopulation } from '../../utils/convertPopulation.ts';
    export let country: CountryData | null = null ;
</script>

{#if country}
<div class="mt-10 xl:flex gap-16">
    <img class="w-full xl:w-1/2" src={country.flags.svg} alt={country.flags.alt} />
    <div class="xl:grid grid-cols-2 gap-10">
        <h4 class="text-3xl dark:text-white py-2 font-bold xl:col-span-2">{country.name.common}</h4>
        <article class="mt-4 flex flex-col gap-2">
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Native Name:</strong>
                    {country.name.official}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Population:</strong>
                    {convertPopulation(country.population)}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Region:</strong>
                    {country.region}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Sub Region:</strong>
                    {country.subregion}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Capital:</strong>
                    {country.capital}
                </p>
            </div>
        </article>
        <article class="mt-4">
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Top Level Domain:</strong>
                    {country.tld}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Currencies:</strong>
                    {Object.keys(country.currencies)[0]}
                </p>
            </div>
            <div>
                <p class="dark:text-slate-300">
                    <strong class="font-bold dark:text-white">Languages:</strong>
                    {Object.values(country?.languages)[0]}
                </p>
            </div>
        </article>
        <article class="mt-4">
            {#if country.borders}
                <h4 class=" dark:text-white py-2 font-bold">Border Countries:</h4>
                <div class="flex gap-2">
                    {#each country.borders as border}
                        <button
                            class="dark:bg-dark-primary border border-black dark:border-white text-black cursor-default hover:bg-dark-secondary dark:text-white font-bold py-2 px-4 rounded"
                            >{border}</button
                        >
                    {/each}
                </div>
            {/if}
        </article>
    </div>
</div>
{ /if}