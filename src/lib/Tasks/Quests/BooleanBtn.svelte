<script lang="ts">
	import type { Body, CorrectAnswer, Option, QuestData } from './types';

	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import { initQuest } from '$lib/utils/quest';
	import Base from './Base.svelte';
	import QuestField from '$lib/components/QuestField.svelte';
	import { shuffleArray } from '$lib/utils/shuffle';

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

	let body = $state<Body>([{ type: '', content: '' }]),
		correctAnswer = $state<CorrectAnswer>([]),
		userAnswer = $state<string>(''),
		isMounted = $state(false),
		options = $state<Option[]>([]);

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);

		isCorrect = correctAnswer.some(
			(answer) => normalizeText(answer.content) === normalizedUserAnswer
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
			<!-- {#if isMounted} -->
			<span class="btn text-3xl font-bold">
				{userAnswer}
			</span>

			<div class="flex gap-2 text-base md:text-2xl">
				{#each options as option}
					<button
						disabled={hasSubmitted}
						onclick={() => (userAnswer = option.content)}
						class="hover:bg-primary-700 bg-primary-500 w-full rounded-xl p-4 text-white md:text-lg flex justify-center"
					>
						<QuestField field={[option]} />
					</button>
				{/each}
			</div>

			<!-- {/if} -->
		{/snippet}
	</Base>
</main>
