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
	} = $props<{
		level?: 'easy' | 'normal' | 'hard' | undefined;
		hasSubmitted: boolean;
		isCorrect: boolean;
	}>();

	function setLevel(): 'easy' | 'normal' | 'hard' {
		let rd = round(random(1, 3), 0);
		return rd === 1 ? 'easy' : rd === 2 ? 'normal' : 'hard';
	}

	let correctBase = $state(''),
		correctRadicand = $state(''),
		correctRadical = $state(''),
		correctIndex = $state(''),
		correctAnswer = $state(''),
		userAnswer = $state('');

	export function init() {
		let userAnswer;
		let radicand;

		let base = ['a', 'b', 'c', 2, 3, 4, 5, '5a'][Math.floor(random() * 8)];
		let index = ['m', 'n', 'p', 2, 3, 6, 8][Math.floor(random() * 7)];

		if (level === 'normal') {
			radicand = `${base}`;
		} else {
			let _base = base === '5a' ? '\\left(5a\\right)' : `${base}`;
			if (['m', 'n', 'p', 0].includes(index)) {
				radicand = `${_base}^{${index}}`;
			} else {
				radicand = `${_base}^${index}`;
			}
		}

		let radical = index === 2 ? `\\sqrt{${radicand}}` : `\\sqrt[${index}]{${radicand}}`;

		if (level === 'normal') {
			userAnswer = `\\left(${radical}\\right)^\\placeholder{}`;
		} else {
			userAnswer = index === 2 ? `\\sqrt{\\placeholder{}}` : `\\sqrt[${index}]{\\placeholder{}}`;
		}

		//base = base === '(5a)' ? '5a' : `${base}`;

		return [`${base}`, `${radicand}`, `${radical}`, userAnswer, `${index}`];
	}

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);

		const normalizedCorrectAnswer = normalizeText(correctAnswer);

		isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

		hasSubmitted = true;
	}

	// Hack muito louco que não tenho tempo de entender ou melhorar
	let mounted = $state(false);

	onMount(() => {
		[correctBase, correctRadicand, correctRadical, userAnswer, correctIndex] = init();

		if (level === 'easy') {
			correctAnswer = `${correctBase}`;
		} else if (level === 'normal') {
			if (['m', 'n', 'p'].includes(correctIndex)) {
				correctAnswer = `\\left(${correctRadical}\\right)^{${correctIndex}}`;
			} else {
				correctAnswer = `\\left(${correctRadical}\\right)^${correctIndex}`;
			}
		} else if (level === 'hard') {
			correctAnswer = `${correctRadical}`;
		}

		mounted = true;
	});
</script>

<span
	class="w-full items-center justify-start self-start py-4 text-4xl font-bold text-white"
	style="font-family: Nunito;">{questionIncentive}</span
>
<main class=" mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
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
		<label for="answer" class="mb-2 block dark:text-surface-50 text-surface-950"> Complete as equivalências: </label>

		<div class="flex rounded border bg-sky-100 p-4 text-base md:text-2xl">
			{#if level === 'easy'}
				<div class="flex items-center">
					{@html display(correctRadical)}
				</div>
				<div class="flex items-center">
					{@html display('=')}
				</div>
				<Mathfield bind:value={userAnswer} />
			{:else if level === 'normal' && mounted}
				<Mathfield bind:value={userAnswer} />
				<div class="flex items-center">
					{@html display(`= ${correctBase}`)}
				</div>
			{:else if mounted}
				<!-- Hack muito louco que não tenho tempo de entender ou melhorar -->
				<Mathfield bind:value={userAnswer} />
				<div class="flex items-center">
					{@html display(`= ${correctBase}`)}
				</div>
			{/if}
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
