<script lang="ts">
	import Input from '../components/Input/Input.svelte';
	import Card from '../components/Card/Card.svelte';
	import Select from '../components/Select/Select.svelte';
	import type { CountryData } from '../types/countries.js';
	import { onMount } from 'svelte';
	import getCountries from '../service/getAllCountries.js';
	import filterByRegion from '../service/filterByRegion.js';
	import getOneCountry from '../service/getOneCountry.js';
	import { regions } from '../data.js';

	let countries: CountryData[] = [];
	let loading: boolean = true;
	let errorMessage: Error | null = null;
	let inputValue: string = '';

	onMount(async () => {
		try {
			const data = await getCountries();
			countries = data;
		} catch (error) {
			console.error('An error occurred:', error);
			errorMessage = error as Error;
			
		} finally {
			loading = false;
		}
	});

	const getCountriesByRegion = async (e: any) => {
		errorMessage = null;
		try {
			const filteredCountries = await filterByRegion(e.detail);
			countries = filteredCountries;
		} catch (error) {
			console.error(' An error occurred:', error);
			errorMessage = error as Error;
		} finally {
			loading = false;
		}
	};

	const handleInput = async (e: any) => {
		try {
			inputValue = e.detail;
			const data = await getOneCountry(inputValue);
			if(data.status === 404) throw new Error('Country not found :(');
			countries = [data[0]];
		} catch (err) {
			errorMessage =  err as Error;
		} finally {
			loading = false;

		}
	};
</script>
<div class="bg-light-primary dark:bg-dark-secondary min-h-screen pt-28">
	<div class="px-4 max-w-7xl mx-auto ">
		<div class="md:flex justify-between items-center">
			<Input placeholder="Search for a country" id="search" on:submit={handleInput} />
			<Select options={regions} className="mt-4" on:select={getCountriesByRegion} />
		</div>
		{#if loading}
			<p class="text-white">Loading...</p>
		{:else if errorMessage}
			<p class="text-white text-center">{errorMessage.message}</p>
		{:else}
			<div class="mt-10 grid md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
				{#each countries as country}
					<a href="/country/{country.name.common}">
						<Card
							flags={country.flags}
							name={country.name}
							population={String(country.population)}
							region={country.region}
							capital={country.capital}
						/>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
