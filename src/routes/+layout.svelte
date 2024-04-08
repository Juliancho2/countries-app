<script>
	import Header from '../components/Header/Header.svelte';
    import {mode} from '../lib/store.ts';
    import '../styles/app.css';
</script>
<Header/>
<main class="{ $mode === 'dark' ? 'dark' : ''}">
    <slot/>
</main>