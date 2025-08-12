<script lang="ts">
	import { display } from 'mathlifier';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';
	import { ExpressionParser } from '$lib/utils/parser';
	import type { QuestData } from './types';

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
		userAnswer?: string;
	}>();

	let displayExpression = $state(''),
		correctAnswer = $state<string | string[]>(''),
		userAnswer = $state(questData.userAnswerPlaceholder || ''),
		isMounted = $state(false),
		options = $state([]);

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);
		if (Array.isArray(correctAnswer)) {
			// If correctAnswer is an array, check if any answer matches
			isCorrect = correctAnswer.some((answer) => normalizeText(answer) === normalizedUserAnswer);
		} else {
			// If correctAnswer is a single string, check direct match
			isCorrect = normalizedUserAnswer === normalizeText(correctAnswer);
		}

		hasSubmitted = true;
	}

	onMount(() => {
		const rd = Math.floor(Math.random() * questData.length);
		const { body, scope, ans, userAnswerPlaceholder } = questData[rd];
		options = questData[rd].options;

		userAnswer = userAnswerPlaceholder;
		const parser = new ExpressionParser(scope);
		displayExpression = parser.parse(body);
		if (typeof ans === 'string') {
			correctAnswer = parser.parse(ans);
		} else {
			correctAnswer = ans.map((a: any) => parser.parse(a));
		}

		isMounted = true;
	});
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	{#if isMounted}
		<div class="dark:text-surface-50 text-surface-950 grid gap-6">
			<span
				class="items-center justify-start self-start py-4 text-xl font-bold"
				style="font-family: Nunito;">{command}</span
			>

			<div class="flex items-center text-lg">
				{@html display(displayExpression)}
			</div>
			<hr class="mt-4" />
			<div class="flex flex-col gap-2 text-base md:text-2xl">
				{#each options as option}
					<button
						class:bg-primary-500={userAnswer === option}
						disabled={hasSubmitted}
						onclick={() => (userAnswer = option)}
						class="hover:bg-primary-500 w-full rounded-xl p-4 text-white md:text-lg"
					>
						{option}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#snippet correctContent()}
		<p class="mt-2 flex flex-col rounded bg-green-200 p-2 text-green-900">
			{#if Array.isArray(correctAnswer)}
				{#each correctAnswer as answer, i}
					<span class="m-auto">{answer}</span>
					{#if i < correctAnswer.length - 1}
						<span class="m-auto"> ou </span>
					{/if}
				{/each}
			{:else}
				<span class="m-auto">{correctAnswer}</span>
			{/if}
		</p>
	{/snippet}

	{#snippet wrongContent()}
		<p class="mt-2 flex flex-col rounded bg-red-200 p-2 text-red-900">
			{#if Array.isArray(correctAnswer)}
				{#each correctAnswer as answer, i}
					<span class="m-auto">{answer}</span>
					{#if i < correctAnswer.length - 1}
						<span class="m-auto"> ou </span>
					{/if}
				{/each}
			{:else}
				<span class="m-auto">{correctAnswer}</span>
			{/if}
		</p>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
