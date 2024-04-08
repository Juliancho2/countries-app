<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Svg from '../Svg/Svg.svelte';
	import { iconSvg } from '../../data.js';
	export let options: string[] = [];
	export let className: string = '';
	let value: string = 'Filter by Region';
	let showOptions: boolean = false;

	let dispatcher = createEventDispatcher();
	$: {
		dispatcher('select', value);
	}

	const handleOptions = (e) => {
		value = e.target.value;
		showOptions = !showOptions;
	};

	const handleClickOutside = (e) => {
		if (!e.target.closest('.relative')) {
			showOptions = false;
		}
	};
	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});
</script>

<div class="relative max-w-[15rem] shadow-sm">
	<button
		on:click={() => (showOptions = !showOptions)}
		class="flex gap-2 items-center justify-center w-full border bg-light-secondary  dark:border-slate-600 h-12 min-w-[10rem] dark:bg-dark-primary rounded-md overflow-hidden text-gray-500 dark:text-slate-300 {className}"
	>
		{value}
		{#if !showOptions}
			<Svg icon={iconSvg["arrowDow"]}  />
		{:else}
			<Svg icon={iconSvg["arrowUp"]}  />
		{/if}
	</button>
	{#if showOptions}
		<div
			class="absolute w-full bg-light-secondary dark:bg-dark-primary rounded-md overflow-hidden mt-4 border dark:border-slate-600"
		>
			{#each options as item, index}
				<button
					on:click={(e) => handleOptions(e)}
					class="w-full p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
					value={item}>{item}</button
				>
			{/each}
		</div>
	{/if}
</div>
