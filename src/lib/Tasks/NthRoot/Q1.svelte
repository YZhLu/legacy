<script lang="ts">
	import { display } from 'mathlifier';
	import { random, round } from 'mathjs';
	import { normalizeText } from '$lib/utils/text';
	import { getRootName } from '$lib/utils/math';
	import { onMount } from 'svelte';
	import Feedback from '$lib/components/Feedback.svelte';
	import { invalidate } from '$app/navigation';

	let questionIncentive = ''; //'Listen and respond';

	let { isCorrect = $bindable(false), hasSubmitted = $bindable(false) } = $props();

	let base = round(random(-10, 10), 0);
	let index = round(random(2, 10), 0);
	let radicand = base ** index;

	let correctAnswer = $state(''),
		userAnswer = $state(''),
		displayExpression = $state('');

	export function init() {
		base = round(random(-10, 10), 0);
		index = round(random(2, 10), 0);
		radicand = base ** index;

		let root = getRootName(index);

		if (index === 2) {
			correctAnswer = `A raiz ${root} de ${radicand} é igual a ${base}; o que equivale a ${base} elevado ao quadrado ser igual a ${radicand}.`;
		} else if (index === 3) {
			correctAnswer = `A raiz ${root} de ${radicand} é igual a ${base}; o que equivale a ${base} elevado ao cubo ser igual a ${radicand}.`;
		} else {
			correctAnswer = `A raiz ${root} de ${radicand} é igual a ${base}; o que equivale a ${base} elevado à ${root} potência ser igual a ${radicand}.`;
		}

		displayExpression = `\\sqrt[${index}]{${radicand}} = ${base} \\leftrightarrow ${base}^{${index}} = ${radicand}`;

		// Force update
		invalidate('correctAnswer');
		invalidate('displayExpression');
	}

	export function checkAnswer() {
		const normalizedUserAnswer = normalizeText(userAnswer);
		const normalizedCorrectAnswer = normalizeText(correctAnswer);

		isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
		hasSubmitted = true;
	}

	onMount(() => {
		init();
	});
</script>

<span
	class="w-full items-center justify-start self-start py-4 text-4xl font-bold text-white"
	style="font-family: Nunito;"
>
	{questionIncentive}
</span>
<main class=" mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	<div class="mb-4">
		<label for="answer" class="dark:text-surface-50 text-surface-950 mb-2 block">
			Escreva, por extenso, a seguinte equivalência:
		</label>
		<div class="min-h-[4rem] rounded border bg-sky-100 p-4 text-base md:text-2xl">
			{@html display(displayExpression)}
		</div>
	</div>
	<label for="answer" class="mb-2 block dark:text-surface-50 text-surface-950 "> Digite a resposta por extenso 👇</label>

	<textarea
		id="answer"
		bind:value={userAnswer}
		class="min-h-[100px] w-full resize-y rounded border p-2"
		placeholder="Digite sua resposta..."
		disabled={hasSubmitted}
	></textarea>

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>

{#snippet correctContent()}
	<p class="mt-2 rounded bg-green-200 p-2 text-green-900">{correctAnswer}</p>
{/snippet}

{#snippet wrongContent()}
	<p class="mt-2 rounded bg-red-200 p-2 text-red-900">{correctAnswer}</p>
{/snippet}
