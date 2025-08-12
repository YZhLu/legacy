<script lang="ts">
	export let onOperation: (op: string) => void;
	export let disabled: boolean;
</script>

<div class="grid grid-cols-4 gap-2">
	<button
		class="rounded bg-yellow-200 p-4 hover:bg-yellow-300"
		on:click={() => onOperation('+')}
		{disabled}
	>
		+
	</button>
	<button
		class="rounded bg-yellow-200 p-4 hover:bg-yellow-300"
		on:click={() => onOperation('-')}
		{disabled}
	>
		-
	</button>
	<button
		class="rounded bg-yellow-200 p-4 hover:bg-yellow-300"
		on:click={() => onOperation('\\times')}
		{disabled}
	>
		×
	</button>
	<button
		class="rounded bg-yellow-200 p-4 hover:bg-yellow-300"
		on:click={() => onOperation('\\div')}
		{disabled}
	>
		÷
	</button>
</div>
