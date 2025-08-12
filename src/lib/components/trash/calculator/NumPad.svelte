<script lang="ts">
	import { btnLabel } from "./calculatorStore";

	export let onDigit: (digit: string) => void;
    export let onCheck: () => void;
	
	export let onBackspace: () => void;
	export let onClear: () => void;
</script>

<div class="grid grid-cols-3 gap-2">
	{#each Array(9) as _, i}
		<button
			class="rounded bg-gray-200 p-4 hover:bg-gray-300"
			on:click={() => onDigit((i + 1).toString())}
		>
			{i + 1}
		</button>
	{/each}
	<button class="rounded bg-sky-300 p-4 hover:bg-sky-400" on:click={onCheck}> {$btnLabel} </button>
	<button class="rounded bg-gray-200 p-4 hover:bg-gray-300" on:click={() => onDigit('0')}>
		0
	</button>
	<button class="rounded bg-red-200 p-4 hover:bg-red-300" on:click={onBackspace} >
		⌫
	</button>
</div>
<br>
<button class="rounded bg-red-500 p-4 hover:bg-red-700" on:click={onClear}> C </button>