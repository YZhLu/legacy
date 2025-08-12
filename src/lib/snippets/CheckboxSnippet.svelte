<script lang="ts">
	import QuestField from '$lib/components/QuestField.svelte';

	import type { CorrectAnswer } from '$lib/Tasks/Quests/types';

	let { correctAnswer } = $props<{
		correctAnswer: CorrectAnswer;
	}>();
</script>

<span class="grid auto-rows-fr gap-3">
	{#each correctAnswer as field}
		<span class="flex items-center justify-center rounded border"> <QuestField field={[field]} /></span>
	{/each}
</span>
