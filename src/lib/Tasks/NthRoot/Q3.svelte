<script lang="ts">
	import Mathfield from '$lib/components/Mathfield.svelte';
	import { display } from 'mathlifier';
	import { random, round } from 'mathjs';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';

	let questionIncentive = ''; //'Listen and respond';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		level = setLevel()
	} = $props<{ level?: 'easy' | 'normal' | 'hard'; hasSubmitted: boolean; isCorrect: boolean }>();

	function setLevel(): 'easy' | 'normal' | 'hard' {
		let rd = round(random(1, 3), 0);
		return rd === 1 ? 'easy' : rd === 2 ? 'normal' : 'hard';
	}

	let correctBase = $state(''),
		correctRadicand = $state(''),
		correctRadical = $state(''),
		correctPow = $state(''),
		correctAnswer = $state(''),
		userAnswerBase = $state(''),
		userAnswerRadicand = $state(''),
		userAnswerPow = $state(''),
		userAnswer = $state('');

	export function init() {
		let base = level === 'hard' ? round(random(0, 10), 0) : round(random(-10, 10), 0);
		let index = round(random(2, 3), 0);
		let pow = `${base}^${index}`;
		let radicand = base ** index;
		let radical = index === 2 ? `\\sqrt{${radicand}}` : `\\sqrt[${index}]{${radicand}}`;

		return [`${base}`, `${radicand}`, `${radical}`, pow];
	}

	export function checkAnswer() {
		if (level === 'easy') {
			userAnswerBase = correctBase;
			userAnswerPow = correctPow;
		} else if (level === 'normal') {
			userAnswerBase = correctBase;
		}

		userAnswer = `${correctRadical} = ${userAnswerBase} \\leftrightarrow ${userAnswerPow} = ${userAnswerRadicand}`;
		const normalizedUserAnswer = normalizeText(userAnswer);

		const normalizedCorrectAnswer = normalizeText(correctAnswer);

		isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

		hasSubmitted = true;
	}

	onMount(() => {
		[correctBase, correctRadicand, correctRadical, correctPow] = init();
		correctAnswer = `${correctRadical} = ${correctBase} \\leftrightarrow ${correctPow} = ${correctRadicand}`;
	});
</script>

<span
	class="w-full items-center justify-start self-start py-4 text-4xl font-bold"
	style="font-family: Nunito;">{questionIncentive}{level}</span
>
<main class=" mx-auto max-w-2xl p-4" style="font-family: Nunito;">
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

	<div class="mb-4">
		<label for="answer" class="mb-2 block"> Complete as equivalências: </label>

		<div class="flex rounded border bg-sky-100 p-4 text-surface-950 md:text-2xl">
			<div class="flex items-center">
				{@html display(correctRadical + '=')}
			</div>

			{#if level === 'hard'}
				<Mathfield bind:value={userAnswerBase} />
			{:else}
				<div class="flex items-center">
					{@html display(correctBase)}
				</div>
			{/if}
			<div class="flex items-center">
				{@html display('\\leftrightarrow')}
			</div>
			{#if level !== 'easy'}
				<Mathfield bind:value={userAnswerPow} />
			{:else}
				<div class="flex items-center pb-2">
					{@html display(correctPow)}
				</div>
			{/if}

			<div class="flex items-center">
				{@html display('=')}
			</div>
			<Mathfield bind:value={userAnswerRadicand} />
		</div>
	</div>

	{#snippet correctContent()}
		<p class="mt-2 rounded bg-green-200 p-2 text-green-900">
			{@html display(correctAnswer)}
		</p>
	{/snippet}

	{#snippet wrongContent()}
		<p class="mt-2 rounded bg-red-200 p-2 text-red-900">
			{@html display(correctAnswer)}
		</p>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
