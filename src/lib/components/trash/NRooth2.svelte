<script lang="ts">
	import type { MathNode, RootNode } from '$lib/components/trash/types/math';
	import MathExpression from './MathExpression.svelte';

	let { node, selected, onValueUpdate } = $props<{
		node: RootNode;
		selected: (node: RootNode) => void;
		onValueUpdate: (nodeId: string, value: string) => void;
	}>();

	function selectNum(event: MouseEvent): void {
		event.stopPropagation();
		selected(node);
	}

	function selectDen(event: MouseEvent): void {
		event.stopPropagation();
		selected(node);
	}

	function handleSelect(node: MathNode): void {
		selected(node);
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLDivElement;
		onValueUpdate(node.id, target.textContent || '_');
	}

	let fator: number = $state(1);
	if (node.index?.node?.type === 'fraction' || node.rad?.node?.type === 'fraction') {
		fator = 2;
	}
</script>

<main
	style="height: {(node.maxDeep - node.deep) * 20 * fator + 30 * fator}px"
	class="flex items-start justify-center bg-fuchsia-400 py-0 pl-1"
>
	{#if node.index.node}
		<div class="h-full">
			<MathExpression node={node.index.node} {selected} {onValueUpdate} />
		</div>
	{:else}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore event_directive_deprecated -->
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 7 * fator}px;
			font-size: calc({(node.maxDeep - node.deep) * 0.5 * fator}rem + 16px);"
			class="flex items-end justify-center bg-rose-300 text-center"
			contenteditable="true"
			on:click={selectNum}
		>
			{node.index.value || '_'}
		</div>
	{/if}

	<div class="flex items-end justify-center bg-sky-400">
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 7 * fator}px; 
			width: {((node.maxDeep - node.deep) * 1 + 6) * fator}px; 
			margin-right: -0.{5 - (node.maxDeep - node.deep)}rem;"
			class="h-full skew-x-12 transform border-l-[3px] border-l-gray-900"
		></div>
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 15 * fator}px; 
			min-width: {((node.maxDeep - node.deep) * 1 + 7) * fator}px;"
			class=" ml-[0.475rem] h-full -skew-x-12 transform border-l-[4px] border-l-gray-900"
		></div>
	</div>
	<div class="bg-blue-200">
		{#if node.rad.node}
			<div id="#main-rad" class="-ml-[2px] h-full border-t-[4px] border-t-gray-900 px-1 pt-1">
				<MathExpression node={node.rad.node} {selected} onValueUpdate={onValueUpdate}/>
			</div>
		{:else}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore event_directive_deprecated -->
			<div
				class=" -ml-[2px] h-full border-t-[4px] border-t-gray-900 px-1 text-center"
				contenteditable="true"
				on:click={selectDen}
				class:selected={selected === node}
			>
				{node.rad.value || '_'}
			</div>
		{/if}
	</div>
</main>

<!-- <style>
	.nroot {
		display: inline-flex;
		cursor: pointer;
	}

	.index {
		font-size: 0.7em;
		margin-bottom: -0.5em;
	}

	.radical {
		margin: 0 2px;
	}

	.radicand {
		border-top: 2px solid currentColor;
		padding: 2px 4px;
	}
</style> -->
