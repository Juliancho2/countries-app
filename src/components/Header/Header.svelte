<script>
	import ThemeMode from '../ThemeMode/ThemeMode.svelte';
	import { mode } from '$lib/store.ts';
</script>

<div class="{ $mode === 'dark' ? 'dark' : ''} ">
	<nav class="shadow-md bg-light-secondary dark:bg-dark-primary fixed top-0 w-full text-light-text  z-40">
		<div class="container flex justify-between items-center px-4 mx-auto py-5 max-w-7xl">
			<a href="/">
				<h1 class="text-xl md:text-3xl font-bold text-light-text dark:text-dark-text">Where in the world?</h1>
			</a>
			<ThemeMode/>
		</div>
	</nav>
</div>
