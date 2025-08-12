<script lang="ts">
	import QuestField from '$lib/components/QuestField.svelte';
	import type { CorrectAnswer, Option } from '$lib/Tasks/Quests/types';

	let { correctAnswer } = $props<{
		correctAnswer: CorrectAnswer;
	}>();
	let leftCorrectAnswer = $state<CorrectAnswer>([]),
		rightCorrectAnswer = $state<CorrectAnswer>([]);

	correctAnswer.forEach((value: Option, index: number) => {
		if (index % 2 === 0) {
			leftCorrectAnswer.push(value);
		} else {
			rightCorrectAnswer.push(value);
		}
	});
</script>

<span class="flex gap-0.5">
	<span class="grid w-1/2 auto-rows-fr gap-3">
		{#each leftCorrectAnswer as field}
			<span class="flex items-center justify-center rounded border"> <QuestField field={[field]} /></span>
		{/each}
	</span>
	<span class="grid auto-rows-fr">
		{#each rightCorrectAnswer as _}
			<span class="flex items-center justify-center">➜</span>
		{/each}
	</span>
	<span class="grid w-1/2 auto-rows-fr gap-3">
		{#each rightCorrectAnswer as field}
			<span class="flex items-center justify-center rounded border"> <QuestField field={[field]} /></span>
		{/each}
	</span>
</span>
