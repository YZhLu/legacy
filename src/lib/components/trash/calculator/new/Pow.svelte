<script lang="ts">
	import { display } from 'mathlifier';
	import { ast } from './stores/ast';

	import {
		base,
		btnLabel,
		currentInput,
		exp,
		expression,
		isBaseMode,
		isExpMode,
		isPowerMode
	} from '../calculatorStore';
	import { interpretMathNode } from './interpreter/interpret';

	let { disabled } = $props<{
		disabled: boolean;
	}>();

	let symbol = `x^{n}`;
	let currentPowerId: string | null = null;

	function updateDisplayWithPartialInput() {
		if (!currentPowerId) return;

		if ($isBaseMode) {
			// When editing base
			const baseDisplay = $base || '\\square';
			$expression = `${baseDisplay}^{\\blacksquare}`;
		} else if ($isExpMode) {
			// When editing exponent
			const node = $ast.nodeMap.get(currentPowerId);
			console.log('node', node);
			if (node?.type === 'power') {
				const baseValue = node.base.value || '\\square';
				const expDisplay = $exp || '\\square';
				$currentInput = `${baseValue}^{${expDisplay}}`;
			}
		}
	}

	function handlePowerBtn() {
		console.log('222', currentPowerId);
		if (!$isPowerMode || !currentPowerId) {
			// Start new power expression
			$isPowerMode = true;
			$isBaseMode = true;
			$isExpMode = false;
			$btnLabel = 'Confirmar Base';
			currentPowerId = ast.setPower();

			$base = '';
			$exp = '';
			//updateDisplayWithPartialInput();

		} else if ($isExpMode && $ast.root) {
			// Add new power as exponent of current power
			if ($exp) {
				const newPowerId = ast.setPower($exp);
				currentPowerId = newPowerId;
				ast.setExp(currentPowerId, $exp);
			} else {
				return;
			}
			
			
			//$isBaseMode = true;
			//$isExpMode = false;
			//$btnLabel = 'Confirmar Base';
			console.log($ast)

			$base = '';
			$exp = '';
			
		}
		updateDisplayWithPartialInput();
	}

	export function handleCheck() {
		if (!currentPowerId) return;

		if ($isBaseMode) {
			// Moving from base to exponent mode
			$isBaseMode = false;
			$isExpMode = true;
			$btnLabel = 'Confirmar Expoente';
			ast.setBase(currentPowerId, $base || '\\square');
			//updateDisplayWithPartialInput();
		} else if ($isExpMode) {
			// Final power expression
			ast.setExp(currentPowerId, $exp || '\\square');
			// Don't reset isPowerMode here to allow further nesting
			$isBaseMode = false;
			$isExpMode = false;
			$btnLabel = 'Potência';
			currentPowerId = null;
			//updateDisplayWithPartialInput();
		}
	}

	// Watch for input changes
	$effect(() => {
		if ($base || $exp) {
			updateDisplayWithPartialInput();
		}
	});

	// Watch for AST changes
	$effect(() => {
		if ($ast.root && !$isBaseMode && !$isExpMode) {
			$currentInput = interpretMathNode($ast.root);
		}
	});
</script>

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
