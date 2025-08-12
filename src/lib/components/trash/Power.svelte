<script lang="ts">
	import Power from '$lib/components/trash/Power.svelte';

	let {
		power,
		selectedPower,
		deep = 30
	} = $props<{
		power: any;
		selectedPower: (exp: any) => void;
		deep?: number;
	}>();

	function selectThis(): void {
		selectedPower(power);
	}
</script>

<main class="flex items-center py-0 pl-1" style="height: {deep}px">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore event_directive_deprecated -->
	<div contenteditable="true" on:click={selectThis} class:bg-blue-100={selectedPower === power}>
		{power.value}
	</div>
</main>
{#if power.exp}
	<Power power={power.exp} {selectedPower} deep={deep + 15} />
{/if}

