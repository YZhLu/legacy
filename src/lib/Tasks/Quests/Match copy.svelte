<script lang="ts">
	import type { QuestData } from './types';
	import { display } from 'mathlifier';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import { ExpressionParser } from '$lib/utils/parser';
	import { shuffleArray } from '$lib/utils/shuffle';
	import Feedback from '$lib/components/Feedback.svelte';

	interface Match {
		left: string;
		right: string;
	}

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		command,
		questData
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		command: string;
		questData: QuestData[];
	}>();

	let displayExpression = $state(''),
		correctAnswer = $state<string[] | string>(''),
		originalAns = $state([]),
		userAnswer = $state<string[]>([]),
		isMounted = $state(false),
		options = $state<{ left: string[]; right: string[] }>({ left: [], right: [] }),
		arrUserAnswer = $state<string[]>([]),
		optionsType = $state(''),
		matches = $state<Match[]>([]),
		selectedLeft = $state<string | null>(null),
		selectedRight = $state<string | null>(null);

	export function checkAnswer() {
		const sortedUserAnswer = arrUserAnswer.sort().join('; ');

		const normalizedUserAnswer = normalizeText(sortedUserAnswer);

		const _correctAnswer = correctAnswer as string[];
		const sortedCorrectAnswer = _correctAnswer.sort().join('; ');

		const normalizedCorrectAnswer = normalizeText(sortedCorrectAnswer);
		console.log(normalizedUserAnswer);
		console.log(normalizedCorrectAnswer);
		correctAnswer = sortedCorrectAnswer;
		isCorrect = normalizedUserAnswer === normalizeText(normalizedCorrectAnswer);
		hasSubmitted = true;

		// isCorrect = matches === correctAnswer;
		// hasSubmitted = true;
	}

	onMount(() => {
		const rd = Math.floor(Math.random() * questData.length);
		const { body, scope, ans } = questData[rd];
		const _leftOptions = shuffleArray(questData[rd].matchOptions.left);
		const _rightOptions = shuffleArray(questData[rd].matchOptions.right);
		// userAnswer = userAnswerPlaceholder;

		const parser = new ExpressionParser(scope);
		displayExpression = parser.parse(body);

		optionsType = questData[rd].optionsType;

		if (optionsType === 'latex') {
			options.left = _leftOptions.map((option) => parser.parse(option as string));
			options.right = _rightOptions.map((option) => parser.parse(option as string));
		} else {
			options.left = _leftOptions as string[];
			options.right = _rightOptions as string[];
		}

		if (optionsType === 'img') {
			correctAnswer = ans;
			originalAns = JSON.parse(JSON.stringify(ans));
		} else {
			if (typeof ans === 'string') {
				///correctAnswer = parser.parse(ans);
			} else {
				correctAnswer = ans.map((a: any) => parser.parse(a));
			}
		}

		isMounted = true;
	});

	function handleMatch(side: 'left' | 'right', value: string) {
		if (side === 'left') {
			selectedLeft = value;
		} else {
			selectedRight = value;
		}

		// If we have both selections, create a match
		if (selectedLeft && selectedRight) {
			matches = [...matches, { left: selectedLeft, right: selectedRight }];
			arrUserAnswer.push(`${selectedLeft} -> ${selectedRight}`);
			selectedLeft = null;
			selectedRight = null;
		}
	}

	function isMatched(side: 'left' | 'right', value: string) {
		return matches.some((match) => match[side] === value);
	}
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	{#if isMounted}
		<div class="dark:text-surface-50 text-surface-950 grid gap-6">
			<span
				class="items-center justify-start self-start py-4 text-xl font-bold"
				style="font-family: Nunito;"
			>
				{command}
			</span>
			<div class="flex items-center text-lg">
				{@html display(displayExpression)}
			</div>
			<hr class="mt-4" />
			<div class="flex gap-4">
				<!-- Left Column -->
				<div class="flex w-1/2 flex-col gap-2">
					{#each options.left as option}
						<button
							disabled={hasSubmitted || isMatched('left', option)}
							onclick={() => handleMatch('left', option)}
							class="preset-outlined-primary-500 rounded-xl p-4"
							class:bg-secondary-500={selectedLeft === option}
							class:opacity-50={isMatched('left', option)}
						>
							<p class="text-surface-950-50">
								{#if optionsType === 'latex'}
									{@html display(option)}
								{:else if optionsType === 'img'}
									<img src={option} alt="" />
								{:else}
									{option}
								{/if}
							</p>
						</button>
					{/each}
				</div>

				<!-- Right Column -->
				<div class="flex w-1/2 flex-col gap-2">
					{#each options.right as option}
						<button
							disabled={hasSubmitted || isMatched('right', option)}
							onclick={() => handleMatch('right', option)}
							class="preset-outlined-primary-500 rounded-xl p-4"
							class:bg-secondary-500={selectedRight === option}
							class:opacity-50={isMatched('right', option)}
						>
							<p class="text-surface-950-50">
								{#if optionsType === 'latex'}
									{@html display(option)}
								{:else if optionsType === 'img'}
									<img src={option} alt="" />
								{:else}
									{option}
								{/if}
							</p>
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}

	{#snippet correctContent()}
		<p class="mt-2 flex flex-col rounded bg-green-200 p-2 text-green-900">
			{#if optionsType === 'latex'}
				{@html display(correctAnswer as string)}
			{:else if optionsType === 'img'}
				{#each originalAns as ans}
					<span class="gap-4 rounded-xl p-4">
						<label class="flex items-center space-x-2 hover:text-white">
							<input class="checkbox" type="checkbox" checked={true} />

							<img class="" src={ans} alt="" />
						</label>
					</span>
				{/each}
			{:else}
				{correctAnswer}
			{/if}
		</p>
	{/snippet}

	{#snippet wrongContent()}
		<p class="mt-2 flex flex-col rounded bg-red-200 p-2 text-red-900">
			{#if optionsType === 'latex'}
				{@html display(correctAnswer as string)}
			{:else if optionsType === 'img'}
				{#each originalAns as ans}
					<span class="gap-4 rounded-xl p-4">
						<label class="flex items-center space-x-2 hover:text-white">
							<input class="checkbox" type="checkbox" checked={true} />

							<img class="" src={ans} alt="" />
						</label>
					</span>
				{/each}
			{:else}
				{correctAnswer}
			{/if}
		</p>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
