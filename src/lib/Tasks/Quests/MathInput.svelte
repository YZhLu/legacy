<script lang="ts">
	import type { Body, CorrectAnswer, Option, QuestData } from './types';

	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import { initQuest } from '$lib/utils/quest';
	import Base from './Base.svelte';
	import { shuffleArray } from '$lib/utils/shuffle';
	import Mathfield from '$lib/components/Mathfield.svelte';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		command,
		questData,
		questType
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		command: string;
		questData: QuestData[];
		questType: string;
	}>();

	let body = $state<Body>([
			/* { type: '', content: '' } */
		]),
		correctAnswer = $state<CorrectAnswer>([]),
		userAnswer = $state<string>(''),
		isMounted = $state(false),
		options = $state<Option[]>([]);

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);

		isCorrect = correctAnswer.some(
			(answer) => normalizeText(answer.content) === normalizedUserAnswer
		);
		console.log(
			'isCorrect',
			normalizedUserAnswer,
			correctAnswer.map((answer) => normalizeText(answer.content))[0],
			userAnswer
		);
		hasSubmitted = true;
	}

	onMount(() => {
		const initialQuest = initQuest(questData);
		options = shuffleArray(initialQuest.options);
		body = initialQuest.body;
		correctAnswer = initialQuest.correctAnswer;
		userAnswer = initialQuest.userAnswerPlaceholder;
		isMounted = true;
	});
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	<Base {isCorrect} {hasSubmitted} {command} {body} {questType} bind:correctAnswer>
		{#snippet questContent()}
			{#if isMounted}
				<div class="bg-primary-500 flex rounded text-base md:text-2xl">
					<Mathfield bind:value={userAnswer} />
				</div>
			{/if}
		{/snippet}
	</Base>
</main>
