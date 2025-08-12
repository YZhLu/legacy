<script lang="ts">
	import Mathfield from '$lib/components/Mathfield.svelte';
	import { display } from 'mathlifier';
	import { random, round } from 'mathjs';
	import { normalizeText } from '$lib/utils/text';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';

	let questionIncentive = ''; //'Listen and respond';

	let { isCorrect = $bindable(false), hasSubmitted = $bindable(false) } = $props();

	let correctBase = $state(''),
		correctIndex = $state(''),
		correctRadicand = $state(''),
		correctRadical = $state(''),
		userAnswerBase = $state(''),
		userAnswerIndex = $state(''),
		userAnswerRadicand = $state(''),
		userAnswerRadical = $state(''),
		displayExpression = $state('');

	export function init() {
		let base = round(random(-10, 10), 0);
		let index = round(random(2, 10), 0);
		let radicand = base ** index;
		let radical = index === 2 ? `\\sqrt{${radicand}}` : `\\sqrt[${index}]{${radicand}}`;

		const displayExpression =
			index === 2 ? `\\sqrt{${radicand}} = ${base}` : `\\sqrt[${index}]{${radicand}} = ${base}`;
		console.log(displayExpression);

		return [`${base}`, `${index}`, `${radicand}`, `${radical}`, displayExpression];
	}

	export function checkAnswer() {
		const normalizedUserAnswerBase = normalizeText(userAnswerBase);
		const normalizedUserAnswerIndex = normalizeText(userAnswerIndex);
		const normalizedUserAnswerRadicand = normalizeText(userAnswerRadicand);
		const normalizedUserAnswerRadical = normalizeText(userAnswerRadical);

		const normalizedCorrectBase = normalizeText(correctBase);
		const normalizedCorrectIndex = normalizeText(correctIndex);
		const normalizedCorrectRadicand = normalizeText(correctRadicand);
		const normalizedCorrectRadical = normalizeText(correctRadical);

		isCorrect =
			normalizedUserAnswerBase === normalizedCorrectBase &&
			normalizedUserAnswerIndex === normalizedCorrectIndex &&
			normalizedUserAnswerRadicand === normalizedCorrectRadicand &&
			normalizedUserAnswerRadical === normalizedCorrectRadical;
		hasSubmitted = true;
	}

	onMount(() => {
		[correctBase, correctIndex, correctRadicand, correctRadical, displayExpression] = init();
	});
</script>

<span
	class="w-full items-center justify-start self-start py-4 text-4xl font-bold text-white"
	style="font-family: Nunito;">{questionIncentive}</span
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
		<label for="answer" class="mb-2 block">
			Dê o índice, o radical, o radicando e a raiz da seguinte expressão:
		</label>
		<div class="min-h-[4rem] rounded border bg-sky-100 p-4 text-black md:text-2xl">
			<!-- -{displayExpression}o -->
			{@html display(displayExpression)}
		</div>
	</div>

	<label for="answer" class="mb-2 block"> Digite a resposta 👇</label>
	<div class="my-4 text-base">
		<span class="mr-2">Índice:</span>
		<div class=" ">
			<Mathfield bind:value={userAnswerIndex} />
		</div>
	</div>
	<div class="my-2 text-sm md:text-base">
		<span class="mr-2">Radical:</span>
		<div class=" ">
			<Mathfield bind:value={userAnswerRadical} />
		</div>
	</div>
	<div class="my-2 text-sm md:text-base">
		<span class="mr-2">Radicando:</span>
		<div class=" ">
			<Mathfield bind:value={userAnswerRadicand} />
		</div>
	</div>
	<div class="my-2 text-sm md:text-base">
		<span class="mr-2">Raiz:</span>
		<div class=" ">
			<Mathfield bind:value={userAnswerBase} />
		</div>
	</div>

	{#snippet correctContent()}
		<span class="mr-2">Índice:</span>
		<p class="mt-2 rounded bg-green-200 p-2 text-green-900">{@html display(correctIndex)}</p>
		<span class="mr-2">Radical:</span>
		<p class="mt-2 rounded bg-green-200 p-2 text-green-900">{@html display(correctRadical)}</p>
		<span class="mr-2">Radicand:</span>
		<p class="mt-2 rounded bg-green-200 p-2 text-green-900">{@html display(correctRadicand)}</p>
		<span class="mr-2">Raiz:</span>
		<p class="mt-2 rounded bg-green-200 p-2 text-green-900">{@html display(correctBase)}</p>
	{/snippet}

	{#snippet wrongContent()}
		ta no sniplet
		<span class="mr-2">Índice:</span>
		<p class="mt-2 rounded bg-red-200 p-2 text-red-900">{@html display(correctIndex)}</p>
		<span class="mr-2">Radical:</span>
		<p class="mt-2 rounded bg-red-200 p-2 text-red-900">{@html display(correctRadical)}</p>
		<span class="mr-2">Radicando:</span>
		<p class="mt-2 rounded bg-red-200 p-2 text-red-900">{@html display(correctRadicand)}</p>
		<span class="mr-2">Raiz:</span>
		<p class="mt-2 rounded bg-red-200 p-2 text-red-900">{@html display(correctBase)}</p>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
