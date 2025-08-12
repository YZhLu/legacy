<script lang="ts">
	import Mathfield from '$lib/components/Mathfield.svelte';
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
		// userAnswer = $bindable(''),
		// body,
		// scope,
		// ans,
		questData
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		command: string;
		questData: QuestData[];
		userAnswer?: string;
		// body: string;
		// scope: string;
		// ans: string;
	}>();

	let displayExpression = $state(''),
		correctAnswer = $state<string | string[]>(''),
		userAnswer = $state(questData.userAnswerPlaceholder || ''),
		isMounted = $state(false);

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
		//console.log(questData);
		const rd = Math.floor(Math.random() * questData.length);
		const { body, scope, ans, userAnswerPlaceholder } = questData[rd];
		userAnswer = userAnswerPlaceholder;
		const parser = new ExpressionParser(scope);
		displayExpression = parser.parse(body);
		if (typeof ans === 'string') {
			correctAnswer = parser.parse(ans);
		} else {
			correctAnswer = ans.map((a: any) => parser.parse(a));
		}
		// console.log(correctAnswer);
		//correctAnswer = parser.parse(ans);
		//userAnswer = (questData.userAnswerPlaceholder || '\\placeholder{}')
		isMounted = true;
	});
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	<!-- tip -->
	<!-- FALTA FAZER, ESSE eh do Q1 -->
	<!--
    <h1 class="mb-6 text-2xl font-bold flex">Observe o exemplo</h1>
     <div class="text-2xl min-h-[4rem] border rounded p-4 bg-sky-100">
        {@html display(displayExpression)}
        <p class="text-base/5 pt-4 " >
            A raiz quadrada de 16 é igual a 4; o que
            equivale a 4 elevado ao quadrado ser
            igual a 16.
        </p>
    </div> -->
	{#if isMounted}
		<div class="dark:text-surface-50 text-surface-950 grid gap-6">
			<span
				class="items-center justify-start self-start py-4 text-xl font-bold"
				style="font-family: Nunito;">{command}</span
			>
			<!-- <label for="answer" class="text-lg mb-2 block">
			{command}
		</label> -->

			<div class="flex items-center text-lg">
				{@html display(displayExpression)}
			</div>

			<div class="bg-primary-500 flex rounded text-base md:text-2xl">
				<Mathfield bind:value={userAnswer} />
			</div>
		</div>
	{/if}

	{#snippet correctContent()}
		<p class="mt-2 flex flex-col rounded bg-green-200 p-2 text-green-900">
			<!-- {@html display(correctAnswer)} -->
			{#if Array.isArray(correctAnswer)}
				{#each correctAnswer as answer, i}
					{@html display(answer)}
					{#if i < correctAnswer.length - 1}
						<span class="m-auto"> ou </span>
					{/if}
				{/each}
			{:else}
				{@html display(correctAnswer)}
			{/if}
		</p>
	{/snippet}

	{#snippet wrongContent()}
		<p class="mt-2 flex flex-col rounded bg-red-200 p-2 text-red-900">
			<!-- {@html display(correctAnswer)} -->
			{#if Array.isArray(correctAnswer)}
				{#each correctAnswer as answer, i}
					{@html display(answer)}
					{#if i < correctAnswer.length - 1}
						<span class="m-auto"> ou </span>
					{/if}
				{/each}
			{:else}
				{@html display(correctAnswer)}
			{/if}
		</p>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
