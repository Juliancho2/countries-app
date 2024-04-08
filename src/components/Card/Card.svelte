<script lang="ts">
	import type { Flags, NameCountry } from "../../types/countries.js";
	import { convertPopulation } from "../../utils/convertPopulation.js";

    export let flags:Flags;
    export let name:NameCountry;
    export let population:string;
    export let region:string;
    export let capital:string;

</script>


<div class="bg-light-secondary dark:bg-dark-primary  rounded-md w-[18rem]  mx-auto shadow-md hover:scale-105 transition-all">
    <div class=" w-full h-40">
        <img class="w-full object-cover h-full"  alt={flags.alt} src="{flags.svg}"  />
    </div>
    <div class="p-4">
        <h4 class="text-white font-bold text-2xl py-2">{name.common}</h4>
        <div>
           <div class="flex">
            <strong class="mr-2 dark:text-white">Population:</strong>
            <p class="dark:text-slate-200">{ convertPopulation(Number(population))}</p>
           </div>
           <div class="flex">
            <strong class="mr-2 dark:text-white">Region:</strong>
            <p class="dark:text-slate-200">{ region}</p>
           </div>
           <div class="flex">
            <strong class="mr-2 dark:text-white">Capital:</strong>
            <p class="dark:text-slate-200">{ capital}</p>
           </div>
        </div>

    </div>
</div>