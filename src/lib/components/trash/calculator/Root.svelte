<script lang="ts">
	import { display } from 'mathlifier';
	import {
		isRootMode,
		isIndexMode,
		isRadicandMode,
		index,
		radicand,
		currentInput,
		displayExpression,
		finalString,
		btnLabel,
		expression
	} from './calculatorStore';

	export let disabled = false;

	export function updateExpression() {
		if ($currentInput && !$isIndexMode && !$isRadicandMode) {
			$displayExpression.push($currentInput);
			$displayExpression.push('~~~~');
			$finalString = $displayExpression.join(' ');
			$currentInput = '';
		}

		if ($isRootMode && !$isIndexMode && !$isRadicandMode) {
			$expression = '\\sqrt[\\square]{\\blacksquare}';
			$currentInput = $expression;
		} else if ($isRootMode && $isIndexMode && !$isRadicandMode) {
			$expression = `\\sqrt[${$index || '\\square'}]{\\blacksquare}`;
			$currentInput = $expression;
		} else if ($isRootMode && !$isIndexMode && $isRadicandMode) {
			$expression = `\\sqrt[${$index}]{${$radicand || '\\square'}}`;
			$currentInput = $expression;
		} else {
			console.log('chegou else updateExpression');
			$btnLabel = 'check'; //'x^□';
		}
	}

	function handleRootBtn() {
		$isRootMode = true;

		if (!$isIndexMode && !$isRadicandMode) {
			updateExpression();
			$isIndexMode = true;
			$isRadicandMode = false;
			$btnLabel = 'Confirmar Índice';
		}
	}

	export function handleRoot() {
		$isRootMode = true;

		if ($isIndexMode && !$isRadicandMode) {
			$isIndexMode = false;
			$isRadicandMode = true;
			$btnLabel = 'Confirmar Radicando';
			$expression = `\\sqrt[${$index}]{\\square}`;
			$currentInput = $expression;
		} else if (!$isIndexMode && $isRadicandMode) {
			$isIndexMode = false;
			$isRadicandMode = false;
			$isRootMode = false;
			$btnLabel = 'check'; //'□√x';

			updateExpression();

			$expression = '';
			$index = '';
			$radicand = '';
		}
	}

	// export function handleDigit(digit: string) {
	// 	if ($isRootMode && $isIndexMode && !$isRadicandMode) {
	// 		$index = ($index || '') + digit;
	// 		updateExpression();
	// 	} else if ($isRootMode && !$isIndexMode && $isRadicandMode) {
	// 		$radicand = ($radicand || '') + digit;
	// 		updateExpression();
	// 	}
	// }

	// export function handleBackspace() {
	// 	if ($isRootMode) {
	// 		if ($isRadicandMode) {
	// 			if ($radicand) {
	// 				$radicand = $radicand.slice(0, -1);
	// 			} else {
	// 				$isRadicandMode = false;
	// 				$isIndexMode = true;
	// 				$btnLabel = 'Confirmar Índice';
	// 			}
	// 		} else if ($isIndexMode) {
	// 			if ($index) {
	// 				$index = $index.slice(0, -1);
	// 			} else {
	// 				$isRootMode = false;
	// 				$isIndexMode = false;
	// 				$btnLabel = '□√x';
	// 			}
	// 		}
	// 		updateExpression();
	// 	}
	// }
</script>

<div class="w-full">
	<button
		class="h-14 w-full rounded bg-purple-200 p-4 hover:bg-purple-300"
		on:click={handleRootBtn}
		{disabled}
	>
		<!-- '□√x' -->
		{@html display(`\\sqrt[n]{x}`)}
	</button>
</div>

<style>
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
