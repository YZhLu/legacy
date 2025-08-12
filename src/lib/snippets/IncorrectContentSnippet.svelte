<script lang="ts">
	import type { CorrectAnswer } from '$lib/Tasks/Quests/types';
	import { display } from 'mathlifier';

	let { correctAnswer } = $props<{
		correctAnswer: CorrectAnswer;
	}>();
</script>

<p class="mt-2 flex flex-col rounded bg-red-200 p-2 text-red-900">
	{#each correctAnswer as answer, i}
		{#if answer.type === 'latex'}
			{@html display(answer.content)}
		{:else if answer.type === 'string'}
			{answer.content}
		{/if}
		{#if i < correctAnswer.length - 1}
			<span class="m-auto"> ou </span>
		{/if}
	{/each}
</p>
