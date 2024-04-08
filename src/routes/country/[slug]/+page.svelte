<script lang="ts">
	import { onMount } from 'svelte';
	import getOneCountry from '../../../service/getOneCountry.js';
	import type { CountryData } from '../../../types/countries.js';
	import DetailCountry from '../../../components/DetailCountry/DetailCountry.svelte';

	export let data;
	let country: CountryData;
	let errorMessage: Error | null = null;
	let loading: boolean = true;

	onMount(async () => {
		try {
			const res = await getOneCountry(data.slug);
			country = res[0];
		} catch (err) {
			errorMessage = err as Error;
		}finally{
			loading = false
		}
	});
</script>

<div class="pt-28 dark:bg-dark-primary min-h-screen">

	<div class="px-4 max-w-7xl mx-auto pb-8">
		<a href="/">
			<button class="dark:bg-dark-primary text-slate-500 bg-white border shadow-sm hover:dark:bg-dark-secondary dark:text-white py-2 px-4 rounded"
				>Back</button
			>
		</a>
		{#if loading}
			<p class="text-white">Loading...</p>
		{:else if errorMessage} 
			<p>An ocurred an error: {errorMessage}</p>
		{:else if Object.keys(country).length > 0}
		<DetailCountry {country} />
		{/if}
	</div>
</div>
