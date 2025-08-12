<script lang="ts">
    import { display } from 'mathlifier';
    import { finalString, currentInput } from './calculatorStore';
    //export let expression: string;
    
</script>

<div class="text-4xl min-h-[4rem] border rounded p-4">
    {@html display($finalString + $currentInput || '\\square')}
</div>