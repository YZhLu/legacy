<script lang="ts">
	import QuestField from '$lib/components/QuestField.svelte';
	import type { CorrectAnswer, GraphTableRow } from '$lib/Tasks/Quests/types';
	import CheckboxSnippet from './CheckboxSnippet.svelte';
	import GraphTableSnippet from './GraphTableSnippet.svelte';
	import Matchsnippet from './MatchSnippet.svelte';

	let { correctAnswer, type, questType } = $props<{
		correctAnswer: CorrectAnswer;
		type: string;
		questType: string;
	}>();
</script>

<p
	class:bg-green-200={type === 'correct'}
	class:text-green-900={type === 'correct'}
	class:bg-red-200={type === 'incorrect'}
	class:text-red-900={type === 'incorrect'}
	class="mt-2 grid rounded p-2"
>
	{#if questType === 'Match'}
		<Matchsnippet {correctAnswer} />
	{:else if questType === 'Checkbox'}
		<CheckboxSnippet {correctAnswer} />
	{:else if (questType === 'Graph' || questType === 'GraphSimple')}
		<GraphTableSnippet {correctAnswer} {questType}/>
	{:else}
		{#each correctAnswer as field, i}
			<span class="m-auto"><QuestField field={[field]} /></span>
			{#if i < correctAnswer.length - 1}
				<span class="m-auto"> ou </span>
			{/if}
		{/each}
	{/if}
</p>
