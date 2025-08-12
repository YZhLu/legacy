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
		finalString,
		fractionStack
	} from './calculatorStore';

	let { disabled } = $props<{
		disabled: boolean;
	}>();

	function handleFractionBtn() {
		// Insert fraction on num
		if ($isNumeratorMode) {
			if ($numerator) {
				$fractionStack.num = $numerator;
				$numerator = '';
			} else {
				return;
			}
        // Insert fraction on den
		} else if ($isDenominatorMode) {
			if ($denominator) {
				$fractionStack.den = $denominator;
				$denominator = '';
			} else {
				return;
			}
		}
		if (!$isNumeratorMode && !$isDenominatorMode) {
			// Just enter power mode
			$isFractionMode = true;
			$isNumeratorMode = true;
			$isDenominatorMode = false;
			$btnLabel = 'Confirmar Numerador';
		} else {
			console.log('noa seu se devia chamar');
		}
		console.log($fractionStack, 'lll');
		updateExpression();
	}

	export function handleCheck() {
		console.log('chegou 1');
		if ($isNumeratorMode && !$isDenominatorMode) {
			$isNumeratorMode = false;
			$isDenominatorMode = true;
			$btnLabel = 'Confirmar Denominador';
			$fractionStack.num = $numerator;
			$numerator = '';
		} else if (!$isNumeratorMode && $isDenominatorMode) {
			console.log('chegou ?????');
			$isNumeratorMode = false;
			$isDenominatorMode = false;
			$isFractionMode = false;
			$btnLabel = 'check';
			$fractionStack.den = $denominator;
			$denominator = '';
		} else {
			console.log('chegou else hdlFraction');
		}
		console.log('chegou 2 ');
		updateExpression();
		console.log('chegou 3');
	}

	export function updateExpression() {
		if ($fractionStack.num === '' && $fractionStack.den === '') {
			$expression = `\\frac{${$numerator || '\\square'}}{\\blacksquare}`;
		} else if ($fractionStack.num !== '' && $fractionStack.den === '') {
			$expression = `\\frac{${$fractionStack.num}}{${$denominator || '\\square'}}`;
		} else {
			console.log('chamou ele 83');
		}

		$currentInput = $expression;
	}
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
