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
        currentInput
    } from './calculatorStore';

    let { disabled } = $props<{
        disabled: boolean;
    }>();

    // Add stack to handle nested power expressions
    let expressionStack: Array<{base: string, exp: string}> = [];

    function handlePowerBtn() {
        $isPowerMode = true;

        if ($isPowerMode && !$isBaseMode && !$isExpMode) {
            updateExpression();
            $isBaseMode = true;
            $isExpMode = false;
            $btnLabel = 'Confirmar Base';
        } 
    }

    export function handlePower() {
        if ($isBaseMode && !$isExpMode) {
            // Save current base and move to exponent
            $isBaseMode = false;
            $isExpMode = true;
            $btnLabel = 'Confirmar Expoente';
            $expression = `${$base}^\\square`;
            $currentInput = $expression;
        } else if (!$isBaseMode && $isExpMode) {
            // Check if we're in a nested power
            if ($exp.includes('^')) {
                // Push current expression to stack
                expressionStack.push({
                    base: $base,
                    exp: $exp
                });
                // Start new power expression in exponent
                $base = '';
                $exp = '';
                $isBaseMode = true;
                $isExpMode = false;
                $btnLabel = 'Confirmar Base';
            } else {
                // Complete current power expression
                const currentExp = `${$base}^{${$exp}}`;
                
                if (expressionStack.length > 0) {
                    // We're completing a nested power
                    const previous = expressionStack.pop();
                    $base = previous?.base || '';
                    $exp = previous?.exp + currentExp;
                    $isBaseMode = false;
                    $isExpMode = true;
                    updateExpression();
                } else {
                    // We're completing the main power
                    $isBaseMode = false;
                    $isExpMode = false;
                    $isPowerMode = false;
                    $btnLabel = 'x^□';
                    $currentInput = currentExp;
                    $base = '';
                    $exp = '';
                }
            }
        }
    }

    export function updateExpression() {
        if ($isPowerMode) {
            if ($isBaseMode) {
                $expression = `${$base || '\\square'}^{\\square}`;
            } else if ($isExpMode) {
                $expression = `${$base}^{${$exp || '\\square'}}`;
            } else {
                $expression = '\\square^{\\square}';
            }
            $currentInput = $expression;
        }
    }
</script>

<div class="grid grid-cols-1 gap-2">
    <button 
        class="rounded bg-blue-200 p-4 hover:bg-blue-300" 
        on:click={handlePowerBtn} 
        {disabled}
    >
        {$btnLabel}
    </button>
    
    {#if $expression}
        <div class="mt-2">
            {@html display($expression)}
        </div>
    {/if}
</div>