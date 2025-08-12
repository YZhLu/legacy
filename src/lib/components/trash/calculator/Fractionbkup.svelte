<script lang="ts">
	import { display } from 'mathlifier';
	import {
		numerator,
		denominator,
		isNumeratorMode,
		isDenominatorMode,
		btnLabel,
		expression,
		isFractionMode,
		currentInput,
		displayExpression,
		finalString
	} from './calculatorStore';

	let { disabled } = $props<{
		disabled: boolean;
	}>();

	function handleFractionBtn() {
		$isFractionMode = true;

		if (!$isNumeratorMode && !$isDenominatorMode) {
			updateExpression();
			$isNumeratorMode = true;
			$isDenominatorMode = false;
			$btnLabel = 'Confirmar Numerador';
		}
	}

	

	export function handleFraction() {
		$isFractionMode = true;

		if ($isNumeratorMode && !$isDenominatorMode) {
			$isNumeratorMode = false;
			$isDenominatorMode = true;
			$btnLabel = 'Confirmar Denominador';
			$expression = `\\frac{${$numerator}}{\\square}`;
			$currentInput = $expression;
		} else if (!$isNumeratorMode && $isDenominatorMode) {
			$isNumeratorMode = false;
			$isDenominatorMode = false;
			$isFractionMode = false;
			$btnLabel = 'a/b';

			updateExpression();

			$expression = '';
			$numerator = '';
			$denominator = '';
		} else {
			console.log('chegou else hdlFraction');
		}
	}

	export function updateExpression() {
		if ($currentInput && !$isNumeratorMode && !$isDenominatorMode) {
			$displayExpression.push($currentInput);
			$displayExpression.push('~~~~');
			$finalString = $displayExpression.join(' ');
			$currentInput = '';
		}

		if ($isFractionMode && !$isNumeratorMode && !$isDenominatorMode) {
			$expression = '\\frac{\\square}{\\blacksquare}';
			$currentInput = $expression;
		} else if ($isFractionMode && $isNumeratorMode && !$isDenominatorMode) {
			$expression = `\\frac{${$numerator || '\\square'}}{\\blacksquare}`;
			$currentInput = $expression;
		} else if ($isFractionMode && !$isNumeratorMode && $isDenominatorMode) {
			$expression = `\\frac{${$numerator}}{${$denominator || '\\square'}}`;
			$currentInput = $expression;
		} else {
			console.log('chegou else updateExpression');
			$btnLabel = 'check'; //'x^□';
		}
	}

	// export function handleBackspace() {
	//     if ($isFractionMode) {
	//         if ($isDenominatorMode) {
	//             if ($denominator) {
	//                 $denominator = $denominator.slice(0, -1);
	//             } else {
	//                 $isDenominatorMode = false;
	//                 $isNumeratorMode = true;
	//                 $btnLabel = 'Confirmar Numerador';
	//             }
	//         } else if ($isNumeratorMode) {
	//             if ($numerator) {
	//                 $numerator = $numerator.slice(0, -1);
	//             } else {
	//                 $isFractionMode = false;
	//                 $isNumeratorMode = false;
	//                 $btnLabel = 'a/b';
	//             }
	//         }
	//         updateExpression();
	//     }
	// }
</script>

<div class="w-full">
	<button
		class="h-14 w-full rounded bg-green-200 p-4 hover:bg-green-300"
		onclick={handleFractionBtn}
		{disabled}
	>
		{@html display('\\frac{a}{b}')}
	</button>
</div>

<style>
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
