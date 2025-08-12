<script lang="ts">
    // export let onPower: () => void;
    export let onRoot: () => void;
    // export let isPowerMode: boolean;
    export let isRootMode: boolean;
    export let disabled: boolean;
</script>

<div class="grid grid-cols-2 gap-2">
   
    <!-- <button 
        class="p-4 bg-blue-200 rounded hover:bg-blue-300"
        on:click={onPower}
        disabled={disabled || isRootMode}
    >
        {isPowerMode ? 'Confirmar' : 'x^□'}
    </button> -->
    <button 
        class="p-4 bg-purple-200 rounded hover:bg-purple-300"
        on:click={onRoot}
        disabled={disabled}
    >
        {isRootMode ? 'Confirmar' : '□√x'}
    </button>
</div>

<style>
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>