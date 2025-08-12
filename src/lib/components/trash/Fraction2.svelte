<script lang="ts">
	import type { FractionNode } from './types/math';
	import MathExpression from './MathExpression.svelte';

	let { node, selected, onValueUpdate} = $props<{
		node: FractionNode;
		selected: (node: FractionNode) => void;
        onValueUpdate: (nodeId: string, value: string) => void;
	}>();

	function handleClick(event: MouseEvent) {
		event.stopPropagation();
		selected(node);
	}

    function handleInput(event: Event) {
        const target = event.target as HTMLDivElement;
        onValueUpdate(node.id, target.textContent || '_');
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore event_directive_deprecated -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	style="height: {(node.maxDeep - node.deep) * 40 + 60}px"
	class="flex flex-col items-center justify-center bg-amber-200"
	on:click={handleClick}
>
	<div 
    style="height: {(node.maxDeep - node.deep) * 20 + 30}px"
    class="num bg-lime-400">
		{#if node.num.node}
			<div class="px-2">
				<MathExpression node={node.num.node} {selected} onValueUpdate={onValueUpdate}/>
			</div>
		{:else}
			<div class="my-1 min-w-[40px] rounded border text-center">
				{node.num.value}
			</div>
		{/if}
	</div>

	<div class="h-[2px] w-full bg-black"></div>

	<div 
    style="height: {(node.maxDeep - node.deep) * 20 + 30}px"
    class="den bg-pink-400">
		{#if node.den.node}
			<div class="px-2">
				<MathExpression node={node.den.node} {selected} onValueUpdate={onValueUpdate}/>
			</div>
		{:else}
			<div class="my-1 min-w-[40px] rounded border text-center">
				{node.den.value}
			</div>
		{/if}
	</div>
</div>

<!-- <style>
	.fraction {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}
</style> -->
