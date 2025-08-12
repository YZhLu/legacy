<script lang="ts">
	import Feedback from '$lib/components/Feedback.svelte';
	import { round, random } from 'mathjs';
	import { display } from 'mathlifier';
	import { onMount } from 'svelte';

	let userAnswer: '∈' | '∉' | '__' = $state('__');

	let { isCorrect = $bindable(false), hasSubmitted = $bindable(false) } = $props();

	let correctAnswer = $state('');

	let radicand,
		index,
		radical = $state('');

	export function checkAnswer() {
		isCorrect = userAnswer === correctAnswer;
		hasSubmitted = true;
		console.log('chamou', isCorrect);
	}

	onMount(() => {
		init();
	});

	export function init() {
		let rd = round(random(0, 1), 0);
		correctAnswer = rd === 1 ? '∈' : '∉';
		if (rd === 1) {
			radicand = round(random(-10000, 100000), 0);
			let _index = round(random(3, 9), 0);
			index = _index % 2 === 0 ? _index + 1 : _index;
		} else {
			radicand = round(random(-10000, -1), 0);
			let _index = round(random(2, 4), 0);
			index = _index % 2 === 0 ? _index : _index + 1;
		}

		radical = index === 2 ? `\\sqrt{${radicand}}` : `\\sqrt[${index}]{${radicand}}`;

		//return radical, co
	}
</script>

<main class="container mx-auto max-w-2xl p-4">
	<h1 class="mb-6 text-2xl font-bold">Pertence ou Não Pertence?</h1>

	<div class="mb-6">
		<div class="my-6 flex items-center justify-center">
			<p class=" text-center font-mono text-xl">{@html display(radical)}</p>
			<span class=" text-center font-mono text-xl">{userAnswer}</span>&nbsp;
			<p class=" text-center font-mono text-2xl">{@html display('\\mathbb{R}')}</p>
		</div>

		<div class="flex justify-center gap-4">
			<button
				disabled={hasSubmitted}
				onclick={() => (userAnswer = '∈')}
				class="rounded bg-blue-500 px-6 py-3 text-2xl text-white hover:bg-blue-600"
			>
				∈
			</button>
			<button
				disabled={hasSubmitted}
				onclick={() => (userAnswer = '∉')}
				class="rounded bg-blue-500 px-6 py-3 text-2xl text-white hover:bg-blue-600"
			>
				∉
			</button>
		</div>
	</div>
	{#snippet correctContent()}
		<span
			class="my-6 mt-2 flex items-center justify-center rounded bg-green-200 p-2 text-green-900"
		>
			<p class=" text-center font-mono text-xl">{@html display(radical)}</p>
			<span class=" text-center font-mono text-xl">{correctAnswer}</span>&nbsp;
			<p class=" text-center font-mono text-2xl">{@html display('\\mathbb{R}')}</p>
		</span>
	{/snippet}

	{#snippet wrongContent()}
		<span class="my-6 mt-2 flex items-center justify-center rounded bg-red-200 p-2 text-red-900">
			<p class=" text-center font-mono text-xl">{@html display(radical)}</p>
			<span class=" text-center font-mono text-xl">{correctAnswer}</span>&nbsp;
			<p class=" text-center font-mono text-2xl">{@html display('\\mathbb{R}')}</p>
		</span>
	{/snippet}

	<Feedback {isCorrect} {hasSubmitted} {correctContent} {wrongContent}></Feedback>
</main>
