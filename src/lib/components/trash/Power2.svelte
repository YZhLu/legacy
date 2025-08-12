<script lang="ts">
	import type { MathNode } from './types/math';
	import MathExpression from './MathExpression.svelte';

	let { node, selected, onValueUpdate } = $props<{
		node: MathNode;
		selected: (node: MathNode) => void;
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

<main
	style="height: {(node.maxDeep - node.deep + 1) * 20 + 30}px"
	class="flex items-end bg-orange-200"
>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore event_directive_deprecated -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="flex items-end"
		contenteditable="true"
		style="height: {(node.maxDeep - node.deep) * 20 + 30}px"
		on:click={handleClick}
	>
		<span class="bg-emerald-500">{node.value}</span>
	</div>
	{#if node.exp.node}
		<span
			class="flex items-start bg-teal-300"
			style="height: {(node.maxDeep - node.deep + 1) * 20 + 30}px"
		>
			<MathExpression node={node.exp.node} {selected} onValueUpdate={onValueUpdate}/>
		</span>
	{/if}
</main>
