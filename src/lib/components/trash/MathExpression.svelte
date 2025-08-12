<script lang="ts">
	import type { MathNode } from './types/math';
	import Power2 from './Power2.svelte';
	import Fraction2 from './Fraction2.svelte';
	import NRooth2 from './NRooth2.svelte';

	let { node, selected, onValueUpdate } = $props<{
		node: MathNode;
		selected: (node: MathNode) => void;
		onValueUpdate: (nodeId: string, value: string) => void;
	}>();
</script>

<div class="math-expression">
	{#if node.type === 'power'}
		<Power2 {node} {selected} onValueUpdate={onValueUpdate}/>
	{:else if node.type === 'fraction'}
		<Fraction2 {node} {selected} onValueUpdate={onValueUpdate}/>
	{:else if node.type === 'root'}
		<NRooth2 {node} {selected} onValueUpdate={onValueUpdate}/>
	{/if}
</div>

<!-- <style>
    *{
		outline: solid 1px red;
	}
</style> -->
