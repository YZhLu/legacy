<script lang="ts">
	import type { CorrectAnswer } from '$lib/Tasks/Quests/types';
	import { display } from 'mathlifier';
	let { correctAnswer } = $props<{
		correctAnswer: CorrectAnswer;
	}>();
</script>

<p class="mt-2 flex flex-col rounded bg-green-200 p-2 text-green-900">
	{#if correctAnswer.type === 'latex'}
		{#each correctAnswer.content as answer, i}
			{@html display(answer)}
			{#if i < correctAnswer.length - 1}
				<span class="m-auto"> ou </span>
			{/if}
		{/each}
	{:else if correctAnswer.type === 'string'}
		{#each correctAnswer.content as answer, i}
			{answer}
			{#if i < correctAnswer.length - 1}
				<span class="m-auto"> ou </span>
			{/if}
		{/each}
	{/if}
</p>
