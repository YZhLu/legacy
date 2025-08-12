<script lang="ts">
	import { onMount } from 'svelte';
	import 'mathlive';
	import '/node_modules/mathlive/dist/mathlive-fonts.css';

	let mathfield: any;

	let { value = $bindable(), classes = '' } = $props<{}>();

	let kbd = $state(window.mathVirtualKeyboard);

	onMount(() => {
		//mathfield = document.getElementById('math-input');

		mathfield.value = value;

		mathfield.mathVirtualKeyboardPolicy = 'sandboxed';
		mathfield.virtualKeyboardTargetOrigin = '*';
		//mathfield.virtualKeyboardMode = 'sandboxed'//'onfocus';
		mathfield.originValidator = 'none';

		// Evento de mudança de valor
		mathfield.addEventListener('input', (event: { target: { value: string } }) => {
			value = event.target.value;
		});
	});

	$effect(() => {
		value = mathfield.value;
	});

	function showKeyboard() {
		// if (!kbd.visible)
		mathfield.executeCommand('showVirtualKeyboard');
	}

	function hideKeyboard() {
		if (kbd.visible) mathfield.executeCommand('hideVirtualKeyboard');
	}
</script>

<div class="flex h-full w-full flex-col gap-3 p-2 md:p-4">
	<math-field
		onfocus={showKeyboard}
		onblur={hideKeyboard}
		bind:this={mathfield}
		onchange={() => console.log('change')}
		id="math-input"
		class="bg-surface-100 text-surface-950 dark:text-surface-100 dark:bg-surface-900 items-center justify-center text-xl md:min-h-0 md:p-2 md:text-xl {classes}"
	></math-field>
</div>

<style>
	math-field::part(content) {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
