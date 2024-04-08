<script>
    export let fill = 'none';
    export let stroke = 'currentColor';
    export let strokeWidth = 1.5;
    export let icon = 'none';
	export let viewBox = '0 0 24 24';
    export let width = "1em";
    export let height = "1em";

</script>

<svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } viewBox={ viewBox }
	><path
		fill={ fill }
		stroke={ stroke }
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={ strokeWidth }
		d={ icon }
	/></svg
>
