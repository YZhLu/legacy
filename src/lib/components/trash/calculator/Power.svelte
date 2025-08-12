<script lang="ts">
	import { display } from 'mathlifier';
	import {
		base,
		exp,
		isBaseMode,
		isExpMode,
		btnLabel,
		expression,
		isPowerMode,
		currentInput,
		powerStack
	} from './calculatorStore';

	let { disabled } = $props<{
		disabled: boolean;
	}>();

	let symbol = `x^{n}`;

	function handlePowerBtn() {
		if ($isExpMode) {
			// We're in exponent mode, start recursion
			if ($exp) {
				$powerStack.push($exp);
				$exp = '';
			} else {
				return;
			}
		} else {
			// Just enter power mode
			$isPowerMode = true;
			$isBaseMode = true;
			$isExpMode = false;
			$btnLabel = 'Confirmar Base';
		}
		updateExpression();
	}

	export function handleCheck() {
		if ($isBaseMode) {
			// Moving from base to exponent mode
			$isBaseMode = false;
			$isExpMode = true;
			$btnLabel = 'Confirmar Expoente';
			$powerStack.push($base);
			$base = '';
		} else if ($isExpMode) {
			// Final power expression
			$isBaseMode = false;
			$isExpMode = false;
			$isPowerMode = false;
			$btnLabel = 'check'; //'x^□';
			$exp = '';
		}
		updateExpression();
	}

	export function updateExpression() {
        console.log('chamou')
		if ($powerStack.length === 0) {
			$expression = `${$base || '\\square'}^{\\blacksquare}`;
		} else if ($powerStack.length === 1) {
			$expression = `${$powerStack[0]}^{${$exp || '\\square'}}`;
		} else {
			let currentExpression = $exp || '\\square';
			// Add any stacked expressions for nested powers
			for (let i = $powerStack.length - 1; i >= 0; i--) {
				currentExpression = `${$powerStack[i]}^{${currentExpression}}`;
			}
			$expression = currentExpression;
		}
		$currentInput = $expression;
	}
</script>

<!-- <div class="grid grid-cols-2 gap-2"> -->
<div class="w-full">
	<button
		class="h-14 w-full rounded bg-blue-200 p-4 hover:bg-blue-300"
		onclick={handlePowerBtn}
		{disabled}
	>
		{@html display(symbol)}
	</button>
</div>

<style>
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
