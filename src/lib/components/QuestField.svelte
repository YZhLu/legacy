<script lang="ts">
	import { display } from 'mathlifier';

	let { field, classes = 'flex flex-col items-start text-lg' } = $props();
</script>

<div class={classes}>
	{#each field as f, i}
		{#if f.type === 'latex'}
			<span class="break-words">
				{@html display(f.content)}
			</span>
		{:else if f.type === 'img'}
			<span class="m-auto flex justify-center"
				><img class="m-auto rounded-xl" src={f.content} alt="" /></span
			>
		{:else if f.type === 'string'}
			<span>{f.content}</span>
		{/if}
		{#if i < field.length - 1}<br />{/if}
	{/each}
</div>
