<script lang="ts">
	import NRooth from '$lib/components/trash/NRooth.svelte';

	interface NRoothNode {
		id: string;
		maxDeep: number;
		index: {
			value: string;
			nrooth: NRoothNode | null;
		};
		rad: {
			value: string;
			nrooth: NRoothNode | null;
		};
		deep: number;
	}

	let { node, selectedNRooth } = $props<{
		node: any;
		selectedNRooth: (node: any, part: 'index' | 'rad') => void;
	}>();

	function selectNum(event: MouseEvent): void {
		event.stopPropagation();
		selectedNRooth(node, 'index');
	}

	function selectDen(event: MouseEvent): void {
		event.stopPropagation();
		selectedNRooth(node, 'rad');
	}
</script>

<main class="flex h-full w-full items-start justify-center py-0 pl-1">
	{#if node.index.nrooth}
		<div class="h-full">
			<NRooth node={node.index.nrooth} {selectedNRooth} />
		</div>
	{:else}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore event_directive_deprecated -->
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 7}px;"
			class="flex items-end justify-center text-center"
			contenteditable="true"
			on:click={selectNum}
		>
			{node.index.value || '_'}
		</div>
	{/if}

	<div class="flex items-end justify-center">
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 7}px; width: {(node.maxDeep -
				node.deep) *
				1 +
				5}px; margin-right: -0.{5 - (node.maxDeep - node.deep)}rem;"
			class="h-full skew-x-12 transform border-l-[3px] border-l-gray-900"
		></div>
		<div
			style="min-height: {(node.maxDeep - node.deep + 2) * 14}px; min-width: {(node.maxDeep -
				node.deep) *
				1 +
				7}px"
			class=" ml-[0.475rem] h-full -skew-x-12 transform border-l-[4px] border-l-gray-900"
		></div>
	</div>

	{#if node.rad.nrooth}
	
		<div id="#main-rad" class="-ml-[2px] h-full border-t-[4px] border-t-gray-900 px-1 pt-1">
			<NRooth node={node.rad.nrooth} {selectedNRooth} />
		</div>
		
	{:else}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore event_directive_deprecated -->
		<div
			class=" -ml-[2px] h-full border-t-[4px] border-t-gray-900 px-1 text-center"
			contenteditable="true"
			on:click={selectDen}
			class:selectedNRooth={selectedNRooth === node}
		>
			{node.rad.value || '_'}
		</div>
	{/if}
</main>
