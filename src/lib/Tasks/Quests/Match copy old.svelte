<script lang="ts">
	import { display } from 'mathlifier';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';
	import { ExpressionParser } from '$lib/utils/parser';
	import { shuffleArray } from '$lib/utils/shuffle';
	import type { QuestData } from './types';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		comand,
		questData
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		comand: string;
		questData: QuestData[];
		userAnswer?: string;
	}>();

	let displayExpression = $state(''),
		correctAnswer = $state<string | string[]>(''),
		originalAns = $state([]),
		userAnswer = $state(questData.userAnswerPlaceholder || ''),
		isMounted = $state(false),
		options = $state<{ left: string[]; right: string[] }>({ left: [], right: [] }),
		arrUserAnswer = $state<string[]>([]),
		optionsType = $state('');

	export function checkAnswer() {
		const sortedUserAnswer = arrUserAnswer.sort().join('; ');

		userAnswer = sortedUserAnswer;
		const normalizedUserAnswer = normalizeText(userAnswer);

		const sortedCorrectAnswer = Array.isArray(correctAnswer)
			? correctAnswer.sort().join('; ')
			: correctAnswer;
		const normalizedCorrectAnswer = normalizeText(sortedCorrectAnswer);
		correctAnswer = sortedCorrectAnswer;
		isCorrect = normalizedUserAnswer === normalizeText(normalizedCorrectAnswer);
		hasSubmitted = true;
	}

	onMount(() => {
		const rd = Math.floor(Math.random() * questData.length);
		const { body, scope, ans, userAnswerPlaceholder } = questData[rd];
		const _leftOptions = shuffleArray(questData[rd].matchOptions.left);
		const _rightOptions = shuffleArray(questData[rd].matchOptions.right);

		userAnswer = userAnswerPlaceholder;
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
				correctAnswer = parser.parse(ans);
			} else {
				correctAnswer = ans.map((a: any) => parser.parse(a));
			}
		}

		isMounted = true;
	});

	function hdlCheck(option: string) {
		if (arrUserAnswer.includes(option)) {
			arrUserAnswer = arrUserAnswer.filter((item) => item !== option);
		} else {
			arrUserAnswer.push(option);
		}
	}

	let l = $state('left'),
		r = $state('right');
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	{#if isMounted}
		<div class="dark:text-surface-50 text-surface-950 grid gap-6">
			<span
				class="items-center justify-start self-start py-4 text-xl font-bold"
				style="font-family: Nunito;">{comand}</span
			>
			<div class="flex items-center text-lg">
				{@html display(displayExpression)}
			</div>
			<hr class="mt-4" />
			<div class="flex-col-2 flex gap-2 text-base md:gap-4 md:text-2xl">
				<div id="left" class="flex w-1/2 flex-col gap-2 md:gap-4">
					{#each options.left as option}
						<button
							disabled={hasSubmitted}
							onclick={() => {
								hdlCheck(option);
								l = option;
							}}
							class:bg-secondary-500={l === option}
							class="preset-outlined-primary-500 hover:bg-primary-500 flex w-full gap-4 rounded-xl p-4 md:text-lg"
						>
							<!-- <label class="flex items-center space-x-2 hover:text-white"> -->
							<!-- <input class="checkbox" type="checkbox" checked={arrUserAnswer.includes(option)} /> -->
							
							<p class="text-surface-950-50 hover:text-white">
								{#if optionsType === 'latex'}
									{@html display(option)}
								{:else if optionsType === 'img'}
									<img src={option} alt="" />
								{:else}
									{option}
								{/if}
							</p>
							<!-- </label> -->
						</button>
					{/each}
				</div>
				<div id="right" class="flex w-1/2 flex-col gap-2 md:gap-4">
					{#each options.right as option}
						<button
							disabled={hasSubmitted}
							onclick={() => {
								hdlCheck(option);
								r = option;
							}}
							class:bg-secondary-500={r === option}
							class="preset-outlined-primary-500 hover:bg-primary-500 flex w-full gap-4 rounded-xl p-4 md:text-lg"
						>
							<!-- <label class="flex items-center space-x-2 hover:text-white"> -->
							<!-- <input class="checkbox" type="checkbox" checked={arrUserAnswer.includes(option)} /> -->
							
							<p class="text-surface-950-50 hover:text-white">
								{#if optionsType === 'latex'}
									{@html display(option)}
								{:else if optionsType === 'img'}
									<img src={option} alt="" />
								{:else}
									{option}
								{/if}
							</p>
							<!-- </label> -->
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
