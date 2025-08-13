<script lang="ts">
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Progress } from '@skeletonlabs/skeleton-svelte';
	import { onMount, onDestroy } from 'svelte';

	//import { questData } from '../../../data';
	
	import { findQuest, parseInstructions } from '$lib/utils/quest';
	
	import type { QuestAttempt } from '$lib/types/QuestAttempt';

	import { mathlifier } from 'mathlifier';
	import { notifyParentFrame } from '$lib/utils/iframe';
	import Graph from '$lib/Tasks/Quests/Graph.svelte';
	import Checkbox from '$lib/Tasks/Quests/Checkbox.svelte';
	import Match from '$lib/Tasks/Quests/Match.svelte';
	import MultipleChoice from '$lib/Tasks/Quests/MultipleChoice.svelte';
	import MathInput from '$lib/Tasks/Quests/MathInput.svelte';
	import BooleanBtn from '$lib/Tasks/Quests/BooleanBtn.svelte';

	import { book_1_air } from '$lib/data/books/1/index';

	const questData = book_1_air;

	const { qId, taskLimit, studentId } = page.params;

	let { data, helpText } = $props<{ helpText?: string; data: PageProps }>();

	const quest = findQuest(questData, qId);

	helpText = quest.tips ? parseInstructions(quest.tips) : parseInstructions(quest.instructions);

	// const displayTips = mathlifier([helpText] as unknown as TemplateStringsArray);

	const _questData = quest.questData || [];

	const command = quest.command || '';

	const questType = quest.questType;

	const maxQuests = parseInt(taskLimit);

	const questComponents: any[] = $state(
		Array.from({ length: maxQuests }, (_, i) => {
			const _quest = { index: i, isCorrect: false, hasSubmitted: false };
			return _quest;
		})
	);

	let disableKeyShortcuts = $state(false);

	let hideHelp = $state(true),
		correctCount = $state(0),
		incorrectCount = $state(0),
		currentQuest = $state(0),
		completedQuests = $state(0),
		showModal = $state(false),
		endedAt = $state(new Date()),
		startedAt = $state(new Date());

	function handleCheckAnswer() {
		questComponents[currentQuest].checkAnswer();

		let isCorrect = questComponents[currentQuest].isCorrect;

		if (isCorrect) {
			playAudioHit();
			correctCount++;
		} else {
			playAudioMiss();
			incorrectCount++;
		}
		completedQuests++;
	}

	function hdlNextQuestion() {
		if (completedQuests < maxQuests) {
			skipQuestion();
		} else {
			endedAt = new Date();
			showModal = true;
			if (correctCount >= maxQuests / 2) {
				playAudioGoodEnding();
			} else {
				playAudioBadEnding();
			}
		}
	}

	function skipQuestion() {
		if (currentQuest < maxQuests - 1) {
			currentQuest++;
		} else {
			currentQuest = 0;
		}
	}

	async function closeModal() {
		const status = (100 * correctCount) / (correctCount + incorrectCount);

		const questStatus = {
			id: qId,
			status,
			studentId: 'e28268ff-4b97-4e51-86c9-d98f1d57d5a3', // Add appropriate student ID
			questId: qId, // Using the questId from params
			bookId: 'efe7db13-4f57-4b08-bfa9-a33e8106aa9d' // Using the book ID from data
		};

		const volume = parseInt(taskLimit);
		const duration = endedAt.getTime() - startedAt.getTime();
		const speed = (volume * 1000) / duration;

		const questAttempt: QuestAttempt = {
			id: crypto.randomUUID(),
			studentId, // Add appropriate student ID
			questId: qId, // Using the questId from params
			grade: status,
			hits: correctCount,
			misses: incorrectCount,
			duration, // Add duration
			startedAt,
			endedAt,
			volume, // Add volume
			variation: 0, // Add variation
			speed, // Add speed
			bookId: 'efe7db13-4f57-4b08-bfa9-a33e8106aa9d' // Using the book ID from data
		};

		
		//await goto('../', { invalidate: [(url: URL) => true] });
		notifyParentFrame({ action: 'goback', url: '' });

		showModal = false;
	}

	onMount(() => {
		// Função para detectar pressionamento de tecla
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!disableKeyShortcuts) {
				event.preventDefault(); // Previne o comportamento padrão das teclas TODOS INCLUSIVE OS DO NAVEGADOR

				//lógicas de acordo com as teclas
				if (event.key === 'Enter') {
					if (showModal) {
						closeModal();
					}
					if (questComponents[currentQuest].hasSubmitted) {
						hdlNextQuestion();
					} else {
						handleCheckAnswer();
					}
				} else if (event.key === ' ') {
					skipQuestion();
				} else if (event.key === 'Escape') {
					// goto('../');
					notifyParentFrame({ action: 'goback', url: '' });
				}
			}
		};

		// Adicionar listener para o evento keydown
		window.addEventListener('keydown', handleKeyDown);

		// Limpeza ao desmontar o componente
		onDestroy(() => {
			window.removeEventListener('keydown', handleKeyDown);
		});

		startedAt = new Date();
	});

	function handleBack(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		notifyParentFrame({ action: 'goback', url: '' });
	}

	let audioMissElement: HTMLAudioElement,
		audioHitElement: HTMLAudioElement,
		audioSkipElement: HTMLAudioElement,
		audioGoodEndingElement: HTMLAudioElement,
		audioBadEndingElement: HTMLAudioElement;

	let hitAudioSrc = '/duolingo-correct.mp3';
	let missAudioSrc = '/duolingo-wrong.mp3';
	let skipAudioSrc = '/skip.mp3';
	let goodEndingAudioSrc = '/goodEnding.mp3';
	let badEndingAudioSrc = '/badEnding.mp3';

	function playAudioMiss(): void {
		audioHitElement.pause();
		audioSkipElement.pause();
		audioMissElement.play();
	}

	function playAudioHit(): void {
		audioMissElement.pause();
		audioSkipElement.pause();
		audioHitElement.play();
	}

	function playAudioSkip(): void {
		audioMissElement.pause();
		audioHitElement.pause();
		audioSkipElement.play();
	}
	function playAudioGoodEnding(): void {
		audioMissElement.pause();
		audioHitElement.pause();
		audioSkipElement.pause();
		audioBadEndingElement.pause();
		audioGoodEndingElement.play();
	}
	function playAudioBadEnding(): void {
		audioMissElement.pause();
		audioHitElement.pause();
		audioSkipElement.pause();
		audioGoodEndingElement.pause();
		audioBadEndingElement.play();
	}
</script>

<audio bind:this={audioMissElement} src={missAudioSrc} preload="auto"></audio>
<audio bind:this={audioHitElement} src={hitAudioSrc} preload="auto"></audio>
<audio bind:this={audioSkipElement} src={skipAudioSrc} preload="auto"></audio>
<audio bind:this={audioGoodEndingElement} src={goodEndingAudioSrc} preload="auto"></audio>
<audio bind:this={audioBadEndingElement} src={badEndingAudioSrc} preload="auto"></audio>

<div
	class="text-md bg-tertiary-500 absolute top-16 right-4 z-10 flex h-[60svh] w-80 flex-col rounded-lg p-2 px-4 font-bold text-white md:right-28"
	class:hidden={hideHelp}
>
	<span class="flex flex-row justify-between">
		Dica
		<button class="h-8 w-8 rounded-full border" onclick={() => (hideHelp = !hideHelp)}> X </button>
	</span>
	<div class="my-2 overflow-auto">
		<p>
			<!-- {@html displayTips} -->
			{@html helpText}
		</p>
	</div>
</div>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="flex h-16 w-full flex-row items-center justify-center gap-4 p-2 md:px-16">
		<button onclick={handleBack} class="text-surface-700 m-auto self-start text-2xl"> X </button>
		<Progress value={completedQuests} max={maxQuests} height="h-4" meterBg="bg-success-500" />
		<button class="button h-8 w-9 rounded-full border" onclick={() => (hideHelp = !hideHelp)}>
			?
		</button>
	</header>

	<main class="h-full w-full overflow-scroll py-4 font-[Nunito] md:pb-56">
		{#each questComponents as _, i}
			<div
				class:hidden={currentQuest !== i}
				onfocusin={() => (disableKeyShortcuts = true)}
				onfocusout={() => (disableKeyShortcuts = false)}
			>
				{#if quest.questType === 'MathInput'}
					<MathInput
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						{questType}
						questData={_questData}
						{command}
					/>
				{:else if quest.questType === 'Checkbox'}
					<Checkbox
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						{command}
						{questType}
					/>
				{:else if quest.questType === 'Match'}
					<Match
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						{questType}
						{command}
					/>
				{:else if quest.questType === 'MultipleChoice'}
					<MultipleChoice
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						{questType}
						{command}
					/>
				{:else if quest.questType === 'Boolean'}
					<BooleanBtn
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						{questType}
						{command}
					/>
				{:else if quest.questType === 'Graph'}
					<Graph
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						{questType}
						{command}
					/>
				{:else}
					NO QUEST TYPE
				{/if}
			</div>
		{/each}
	</main>
	<footer
		class="bg-surface-50 dark:bg-surface-950 flex w-full flex-row items-center justify-center gap-8 border-t-2 border-t-slate-700 px-4 py-10 font-[Nunito-Bold] md:gap-[20rem] md:py-11 md:pt-11 lg:gap-[35rem]"
	>
		<button
			onclick={() => (playAudioSkip(), skipQuestion())}
			class="button inline-flex h-12 w-40 items-center justify-center rounded-lg border border-b-4 border-slate-700 bg-transparent p-4 font-bold text-slate-700"
		>
			SKIP
		</button>

		{#if questComponents[currentQuest].hasSubmitted}
			<button
				onclick={hdlNextQuestion}
				class="button inline-flex h-12 w-40 items-center justify-center rounded-lg border-b-4 border-[#679424] bg-[#93d333] p-4 font-bold text-[#131f24]"
			>
				NEXT
			</button>
		{:else}
			<button
				onclick={handleCheckAnswer}
				class="button inline-flex h-12 w-40 items-center justify-center rounded-lg border-b-4 border-[#679424] bg-[#93d333] p-4 font-bold text-[#131f24]"
			>
				CHECK
			</button>
		{/if}
	</footer>
</div>

{#if showModal}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/75"
		style="font-family: Nunito;"
	>
		<div
			class="bg-surface-50 dark:bg-surface-950 flex flex-col items-center justify-center gap-4 rounded-lg p-8 text-center shadow-lg"
		>
			<h2 class="mb-4 text-2xl font-bold">Resultados</h2>
			<div
				class="card flex w-24 flex-col items-center justify-center outline-2 outline-[#7e0cf5]"
				style="font-family: Nunito;"
			>
				<section class="inline-flex w-full justify-center rounded-t-md bg-[#7e0cf5]">
					Acertos
				</section>
				<section class="flex flex-row items-center justify-center gap-1 text-[#7e0cf5]">
					<span>
						{correctCount}
					</span>
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjN2UwY2Y1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yOTMgMGMuMzkgMCAuNzA3LjMxNy43MDcuNzA3VjJoMS4yOTNhLjcwNy43MDcgMCAwIDEgLjUgMS4yMDdsLTEuNDYgMS40NkExLjE0IDEuMTQgMCAwIDEgMTMuNTMgNWgtMS40N0w4LjUzIDguNTNhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNkwxMSAzLjk0VjIuNDdjMC0uMzAxLjEyLS41OS4zMzMtLjgwNGwxLjQ2LTEuNDZhLjcuNyAwIDAgMSAuNS0uMjA3TTIuNSA4YTUuNSA1LjUgMCAwIDEgNi41OTgtNS4zOWEuNzUuNzUgMCAwIDAgLjI5OC0xLjQ3QTcgNyAwIDEgMCAxNC44NiA2LjZhLjc1Ljc1IDAgMCAwLTEuNDcuMjk5cS4xMDkuNTMzLjExIDEuMTAxYTUuNSA1LjUgMCAxIDEtMTEgMG01LjM2NC0yLjQ5NmEuNzUuNzUgMCAwIDAtLjA4LTEuNDk4QTQgNCAwIDEgMCAxMS45ODggOC4zYS43NS43NSAwIDAgMC0xLjQ5Ni0uMTExYTIuNSAyLjUgMCAxIDEtMi42My0yLjY4NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
						width="17x"
						height="17x"
						alt="tempo"
					/>
				</section>
			</div>
			<div
				class="card outline-error-500 flex w-24 flex-col items-center justify-center outline-2"
				style="font-family: Nunito;"
			>
				<section class="bg-error-500 inline-flex w-full justify-center rounded-t-md">Erros</section>
				<section class="text-error-500 flex flex-row items-center justify-center gap-1">
					<span>
						{incorrectCount}
					</span>
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDQ4IiBoZWlnaHQ9IjIwNDgiIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiPjxwYXRoIGZpbGw9IiNkMjBmMjkiIGQ9Ik05NjAgMHExMzMgMCAyNTUgMzR0MjMwIDk2dDE5NCAxNTB0MTUwIDE5NXQ5NyAyMjl0MzQgMjU2cTAgMTMzLTM0IDI1NXQtOTYgMjMwdC0xNTAgMTk0dC0xOTUgMTUwdC0yMjkgOTd0LTI1NiAzNHEtMTMzIDAtMjU1LTM0dC0yMzAtOTZ0LTE5NC0xNTB0LTE1MC0xOTV0LTk3LTIyOVQwIDk2MHEwLTEzMyAzNC0yNTV0OTYtMjMwdDE1MC0xOTR0MTk1LTE1MHQyMjktOTdUOTYwIDBtMCAxNzkycTExNCAwIDIyMC0zMHQxOTktODR0MTY5LTEzMHQxMzAtMTY4dDg0LTE5OXQzMC0yMjF0LTMwLTIyMHQtODQtMTk5dC0xMzAtMTY5dC0xNjgtMTMwdC0xOTktODR0LTIyMS0zMHEtMTE1IDAtMjIxIDMwdC0xOTggODR0LTE2OSAxMzB0LTEzMCAxNjh0LTg0IDE5OXQtMzAgMjIxcTAgMTE0IDMwIDIyMHQ4NCAxOTl0MTMwIDE2OXQxNjggMTMwdDE5OSA4NHQyMjEgMzBNODk2IDUxMmgxMjh2NjQwSDg5NnptMCA3NjhoMTI4djEyOEg4OTZ6Ii8+PC9zdmc+"
						width="17x"
						height="17x"
						alt="tempo"
					/>
				</section>
			</div>
			<button
				onclick={closeModal}
				class="button inline-flex h-12 w-40 items-center justify-center rounded-lg border-b-4 border-[#679424] bg-[#93d333] p-4 font-bold text-[#131f24]"
			>
				Concluir
			</button>
		</div>
	</div>
{/if}
