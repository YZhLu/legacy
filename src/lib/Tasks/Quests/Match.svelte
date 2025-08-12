<script lang="ts">
	import type { Body, CorrectAnswer, Option, QuestData } from './types';

	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import { initQuest } from '$lib/utils/quest';
	import Base from './Base.svelte';
	import QuestField from '$lib/components/QuestField.svelte';

	import { shuffleArray } from '$lib/utils/shuffle';

	interface Match {
		left: Option;
		right: Option;
	}

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
		userAnswer = $state<Match[]>([]),
		isMounted = $state(false),
		options = $state<Option[]>([]),
		leftOptions = $state<Option[]>([]),
		rightOptions = $state<Option[]>([]),
		selectedLeft = $state<Option | null>(null),
		selectedRight = $state<Option | null>(null);

	export function checkAnswer() {
		let normalizedCorrectAnswer = [];

		for (let i = 0; i < correctAnswer.length; i += 2) {
			const matchObj = {
				left: normalizeText(correctAnswer[i].content), // Índice par vai para left
				right: normalizeText(correctAnswer[i + 1].content) // Índice ímpar vai para right
			};
			normalizedCorrectAnswer.push(matchObj);
		}

		normalizedCorrectAnswer = normalizedCorrectAnswer.sort((a, b) => {
			// Primeiro comparar left
			if (a.left < b.left) return -1;
			if (a.left > b.left) return 1;
			// Se left for igual, comparar right
			if (a.right < b.right) return -1;
			if (a.right > b.right) return 1;
			return 0;
		});

		const normalizedUserAnswer = userAnswer
			.map((match) => {
				const matchObj = {
					left: '',
					right: ''
				};

				if (match.left) {
					matchObj.left = normalizeText(match.left.content);
				}
				if (match.right) {
					matchObj.right = normalizeText(match.right.content);
				}

				return matchObj;
			})
			.sort((a, b) => {
				// Primeiro comparar left
				if (a.left < b.left) return -1;
				if (a.left > b.left) return 1;
				// Se left for igual, comparar right
				if (a.right < b.right) return -1;
				if (a.right > b.right) return 1;
				return 0;
			});

		if (normalizedUserAnswer.length !== normalizedCorrectAnswer.length) {
			isCorrect = false;
		} else {
			isCorrect = true;
			for (let i = 0; i < normalizedUserAnswer.length; i++) {
				const opcao1 = normalizedUserAnswer[i];
				const opcao2 = normalizedCorrectAnswer[i];

				// Comparando os elementos dos arrays (type e content)
				if (opcao1.left !== opcao2.left) {
					isCorrect = false; // Se algum item for diferente, os arrays não são iguais
					break;
				}
				if (opcao1.right !== opcao2.right) {
					isCorrect = false; // Se algum item for diferente, os arrays não são iguais
					break;
				}
			}
		}

		hasSubmitted = true;
	}

	function handleMatch(side: 'left' | 'right', value: Option) {
		if (side === 'left') {
			selectedLeft = value;
		} else {
			selectedRight = value;
		}

		// If we have both selections, create a match
		if (selectedLeft && selectedRight) {
			const match = {
				left: selectedLeft,
				right: selectedRight
			};
			userAnswer = [...userAnswer, match];
			selectedLeft = null;
			selectedRight = null;
		}
	}

	function isMatched(side: 'left' | 'right', value: Option) {
		return userAnswer.some((match) => match[side] === value);
	}

	function clearSelection() {
		userAnswer = [];
		selectedLeft = null;
		selectedRight = null;
	}

	onMount(() => {
		const initialQuest = initQuest(questData);
		options = initialQuest.options;
		

		// console.log('options', options);
		options.forEach((value, index) => {
			if (index % 2 === 0) {
				leftOptions.push(value);
			} else {
				rightOptions.push(value);
			}
		});

		leftOptions = shuffleArray(leftOptions);
		rightOptions = shuffleArray(rightOptions);

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
			<div class="flex gap-4">
				<!-- Left Column -->
				<div class="grid w-1/2 auto-rows-fr gap-3">
					{#each leftOptions as option, i}
						<button
							disabled={hasSubmitted || isMatched('left', option)}
							onclick={() => handleMatch('left', option)}
							class="preset-outlined-primary-500 hover:bg-primary-500 border-surface-500 outline-surface-500 grid w-full rounded-xl border-b-3 p-3 outline-1 md:grid-cols-[auto_1fr] md:text-lg"
							class:bg-secondary-500={selectedLeft === option}
							class:opacity-50={isMatched('left', option)}
						>
							<span
								class="border-surface-500 text-surface-500 m-auto ml-1.5 hidden rounded-lg border-2 px-2 py-0.5 text-sm font-bold md:block"
							>
								{i * 2 + 1}
							</span>

							<span class="text-surface-950-50 m-auto">
								<QuestField field={[option]} />
							</span>
						</button>
					{/each}
				</div>

				<!-- Right Column -->
				<div class="grid w-1/2 auto-rows-fr gap-3">
					{#each rightOptions as option, i}
						<button
							disabled={hasSubmitted || isMatched('right', option)}
							onclick={() => handleMatch('right', option)}
							class="preset-outlined-primary-500 hover:bg-primary-500 border-surface-500 outline-surface-500 grid w-full rounded-xl border-b-3 p-3 outline-1 md:grid-cols-[auto_1fr] md:text-lg"
							class:bg-secondary-500={selectedRight === option}
							class:opacity-50={isMatched('right', option)}
						>
							<span
								class="border-surface-500 text-surface-500 m-auto ml-1.5 hidden rounded-lg border-2 px-2 py-0.5 text-sm font-bold md:block"
							>
								{i * 2 + 2}
							</span>

							<span class="text-surface-950-50 m-auto">
								<QuestField field={[option]} />
							</span>
						</button>
					{/each}
				</div>
			</div>
			<button onclick={clearSelection} class="preset-filled-primary-500 btn rounded-lg py-2">
				Limpar Seleção
			</button>
		{/snippet}
	</Base>
</main>
