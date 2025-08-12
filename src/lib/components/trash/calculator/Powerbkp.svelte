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
		displayExpression,
		finalString,
		currentInput
	} from './calculatorStore';

	let { disabled } = $props<{
		disabled: boolean;
	}>();

	let symbol = `x^{n}`;

	function handlePowerBtn() {
		$isPowerMode = true;

		if (!$isBaseMode && !$isExpMode) {
			updateExpression();
			$isBaseMode = true;
			$isExpMode = false;
			$btnLabel = 'Confirmar Base';
		} else if (!$isBaseMode && $isExpMode) {
			console.log('recursao');
		}
	}

	export function handlePower() {
		$isPowerMode = true;

		// if (!$isBaseMode && !$isExpMode) {
		// 	updateExpression();
		// 	$isBaseMode = true;
		// 	$isExpMode = false;
		// 	$btnLabel = 'Confirmar Base';
		// } else
		if ($isBaseMode && !$isExpMode) {
			$isBaseMode = false;
			$isExpMode = true;
			$btnLabel = 'Confirmar Expoente';
			$expression = `${$base}^\\square`;
			$currentInput = $expression;
		} else if (!$isBaseMode && $isExpMode) {
			$isBaseMode = false;
			$isExpMode = false;
			$isPowerMode = false;
			$btnLabel = 'check'; //'x^□';

			updateExpression();

			$expression = '';
			$base = '';
			$exp = '';
		} else {
			console.log('chegou else hdlPower');
		}
	}

	export function updateExpression() {
		if ($currentInput && !$isBaseMode && !$isExpMode) {
			$displayExpression.push($currentInput);
			$displayExpression.push('~~~~');
			$finalString = $displayExpression.join(' ');
			$currentInput = '';
		}

		if ($isPowerMode && !$isBaseMode && !$isExpMode) {
			$expression = '\\square^{\\blacksquare}';
			$currentInput = $expression;
		} else if ($isPowerMode && $isBaseMode && !$isExpMode) {
			$expression = `${$base || '\\square'}^{\\blacksquare}`;
			$currentInput = $expression;
		} else if ($isPowerMode && !$isBaseMode && $isExpMode) {
			$expression = `${$base}^{${$exp || '\\square'}}`;
			$currentInput = $expression;
		} else {
			console.log('chegou else updateExpression');
			$btnLabel = 'check'; //'x^□';
		}
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
