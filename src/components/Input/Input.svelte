<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Svg from '../Svg/Svg.svelte';
	import { iconSvg } from '../../data.js';
	const dispatcher = createEventDispatcher();
	export let id: string;
	export let value: string = '';
	export let placeholder: string = '';

	const handleSubmit = (e: any) => {
		if (e.key === 'Enter') {
			dispatcher('submit', value);
			value = '';
		}
	};
</script>

<div
	class=" flex items-center w-full border h-12 dark:border-slate-600 bg-light-secondary  dark:bg-dark-primary rounded-md overflow-hidden max-w-md px-2"
>
	<Svg icon={iconSvg['search']} strokeWidth={0.5} stroke="white" fill="gray" width="1.5em" height="1.5em" />
	<input
		on:keyup={handleSubmit}
		class="h-full w-full bg-transparent outline-none px-2 text-white"
		type="text"
		{id}
		bind:value
		{placeholder}
	/>
</div>
