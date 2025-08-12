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

	function hdlClick(ans: string) {
		if (userAnswer.includes(ans)) {
			userAnswer = userAnswer.filter((item) => item !== ans);
		} else {
			userAnswer.push(ans);
		}
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
			<div class="flex flex-col gap-2 text-base md:text-2xl">
				{#each options as option, i}
					<button
						disabled={hasSubmitted}
						onclick={() => hdlClick(option.content)}
						class:!border-primary-500={userAnswer.includes(option.content)}
						class="hover:bg-primary-500 border-surface-500 outline-surface-500 preset-outlined-primary-500 flex w-full gap-4 rounded-xl border-b-3 p-4 outline-1 md:text-lg"
					>
						<label class="flex w-full items-center space-x-2 hover:text-white">
							<input
								class="checkbox"
								type="checkbox"
								checked={userAnswer.includes(option.content)}
							/>
							<p class="text-surface-950-50 w-full hover:text-white">
								<QuestField field={[option]} />
							</p>
						</label>
					</button>
				{/each}
			</div>
			<!-- {/if} -->
		{/snippet}
	</Base>
</main>
