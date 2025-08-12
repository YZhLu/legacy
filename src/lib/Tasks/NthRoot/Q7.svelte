<script lang="ts">
	import Mathfield from '$lib/components/Mathfield.svelte';
	import { display } from 'mathlifier';
	import { random } from 'mathjs';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';

	let questionIncentive = ''; //'Listen and respond';

	let { isCorrect = $bindable(false), hasSubmitted = $bindable(false) } = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
	}>();

	let displayExpression = $state(''),
		correctAnswer = $state(''),
		userAnswer = $state('');

	export function init() {
		let ans, displayExpression;
		let base_1 = ['a', 'b', 'c', 2, 4, 6, 8][Math.floor(random() * 7)];
		let base_2 = ['d', 'e', 'f', 3, 5, 7, 9][Math.floor(random() * 7)];
		let base_3 = ['g', 'h', 'i', 11, 13, 17, 19][Math.floor(random() * 7)];

		let exp_1 = ['m', 'n', 'p', 3, 5, 7, 9][Math.floor(random() * 7)];
		let exp_2 = ['q', 'r', 's', 11, 13, 17, 19][Math.floor(random() * 7)];
		let exp_3 = [2, 4, 6, 8][Math.floor(random() * 4)];

		let index = [2, 3, 5][Math.floor(random() * 3)];

		if (index === 2) {
			displayExpression = `\\sqrt{${base_1}^${exp_1}\\cdot ${base_2}^{${exp_2}}\\cdot ${base_3}^${exp_3}}=`;
			ans = `\\sqrt{${base_1}^${exp_1}}\\cdot \\sqrt{${base_2}^{${exp_2}}}\\cdot\\sqrt{${base_3}^${exp_3}}`;
		} else {
			displayExpression = `\\sqrt[${index}]{${base_1}^${exp_1}\\cdot ${base_2}^{${exp_2}}\\cdot ${base_3}^${exp_3}}=`;
			ans = `\\sqrt[${index}]{${base_1}^${exp_1}}\\cdot\\sqrt[${index}]{${base_2}^{${exp_2}}}\\cdot\\sqrt[${index}]{${base_3}^${exp_3}}`;
		}

		return [`${displayExpression}`, `${ans}`];
	}

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);

		const normalizedCorrectAnswer = normalizeText(correctAnswer);

		isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

		hasSubmitted = true;
	}

	onMount(() => {
		[displayExpression, correctAnswer] = init();
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
		<label for="answer" class="dark:text-surface-50 text-surface-950 mb-2 block">
			Complete as equivalências:
		</label>

		<div class="flex rounded border bg-sky-100 p-4 text-base md:text-2xl">
			<div class="flex items-center">
				{@html display(displayExpression)}
			</div>

			<Mathfield bind:value={userAnswer} />
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
