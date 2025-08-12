<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let base = '';
    export let exponent = '';
    export let selected: 'base' | 'exponent' | null = null;
    export let nested: any = null;

    function selectPart(part: 'base' | 'exponent') {
        selected = part;
        dispatch('select', { base, exponent, nested, selected: part });
    }
</script>

<div class="power-expression">
    <!-- Base -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class="base"
        class:selected={selected === 'base'}
        on:click={() => selectPart('base')}
        contenteditable="true"
    >
        {base || '_'}
    </div>

    <!-- Exponent -->
    <div class="exponent-wrapper">
        {#if nested}
            <svelte:self {...nested} on:select />
        {:else}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="exponent"
                class:selected={selected === 'exponent'}
                on:click={() => selectPart('exponent')}
                contenteditable="true"
            >
                {exponent || '_'}
            </div>
        {/if}
    </div>
</div>

<style>
    .power-expression {
        display: inline-flex;
        align-items: flex-start;
        min-width: min-content;
        padding: 4px;
    }

    .base {
        display: inline-block;
        padding: 4px;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        min-width: 2rem;
        text-align: center;
        cursor: pointer;
    }

    .exponent-wrapper {
        display: inline-block;
        margin-left: 2px;
        margin-top: -8px;
        font-size: 0.8em;
    }

    .exponent {
        display: inline-block;
        padding: 2px;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        min-width: 1.5rem;
        text-align: center;
        cursor: pointer;
    }

    .selected {
        border-color: #3b82f6;
        background-color: #eff6ff;
    }
</style>