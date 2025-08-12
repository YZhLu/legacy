<script lang="ts">
	import Fraction from '$lib/components/trash/Fraction.svelte';

	interface FractionNode {
		id: string;
        num: {
            value: string;
            fraction: FractionNode | null;
        };
        den: {
            value: string;
            fraction: FractionNode | null;
        };
        deep: number;
    }

	let { node, selectedFraction } = $props<{
		node: any;
		selectedFraction: (node: any, part: 'num' | 'den') => void;
	}>();

	

	function selectNum(event: MouseEvent): void {
        event.stopPropagation();
        selectedFraction(node, 'num');
    }

    function selectDen(event: MouseEvent): void {
        event.stopPropagation();
        selectedFraction(node, 'den');
    }
	
</script>

{#if node.num.fraction}
	<div class="px-5 py-0">
		<Fraction node={node.num.fraction} {selectedFraction} />
	</div>
{:else}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->
	<div
		class="my-1 min-w-[40px] rounded border text-center"
		contenteditable="true"
		on:click={selectNum}
	>
		{node.num.value || '_'}
	</div>
{/if}
<div class="h-[2px] bg-black"></div>
{#if node.den.fraction}

	<div class="px-5 py-0">
		<Fraction node={node.den.fraction} {selectedFraction} />
	</div>
{:else}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->
	<div
		class="my-1 min-w-[40px] rounded border p-2 text-center"
		contenteditable="true"
		on:click={selectDen}
		class:selectedFraction={selectedFraction === node}
	>
		{node.den.value || '_'}
	</div>
{/if}
