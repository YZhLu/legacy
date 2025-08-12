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
		userAnswer = $state<string[]>([]),
		isMounted = $state(false),
		options = $state<Option[]>([]);

	export function checkAnswer() {
		const normalizedUserAnswer = userAnswer.map((ans) => normalizeText(ans)).sort();
		const normalizedCorrectAnswer = correctAnswer.map((ans) => normalizeText(ans.content)).sort();

		if (normalizedUserAnswer.length !== normalizedCorrectAnswer.length) {
			isCorrect = false;
		} else {
			isCorrect = normalizedUserAnswer.every(
				(val, index) => val === normalizedCorrectAnswer[index]
			);
		}

		hasSubmitted = true;
	}

	onMount(() => {
		const initialQuest = initQuest(questData);
		options = shuffleArray(initialQuest.options);
		body = initialQuest.body;
		correctAnswer = initialQuest.correctAnswer;
		isMounted = true;
	});
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	<Base {isCorrect} {hasSubmitted} {command} {body} {questType} bind:correctAnswer>
		{#snippet questContent()}
			<!-- {#if isMounted} -->
			<hr class="mt-4" />
			<div class="flex flex-col gap-2 md:gap-3 text-base md:text-2xl">
				{#each options as option, i}
					<button
						class:bg-primary-500={userAnswer.includes(option.content)}
						class:text-white={userAnswer.includes(option.content)}
						disabled={hasSubmitted}
						onclick={() => (userAnswer = [option.content])}
						class="hover:bg-primary-500 border-surface-500 outline-surface-500 preset-outlined-primary-500 grid w-full rounded-xl border-b-2 p-3 outline-1 md:grid-cols-[auto_1fr] md:text-lg"
					>
						<span
							class="border-surface-500 text-surface-500 m-auto ml-1.5 hidden rounded-lg border-2 px-2 py-0.5 text-sm font-bold md:block"
						>
							{i + 1}
						</span>
						<span class="pl-4">
							<QuestField field={[option]} />
						</span>
					</button>
				{/each}
			</div>

			<!-- {/if} -->
		{/snippet}
	</Base>
</main>
