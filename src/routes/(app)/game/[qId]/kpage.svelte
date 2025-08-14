<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Progress } from '@skeletonlabs/skeleton-svelte';
	import { onMount, onDestroy } from 'svelte';

	import { chapters } from '../../../Chapters';
	import WisdomResultModal from '$lib/modals/WisdomResultModal.svelte';
	import { parseInstructions } from '$lib/utils/quest';

	import { mathlifier } from 'mathlifier';
	import { notifyParentFrame } from '$lib/utils/iframe';
	import Graph from '$lib/Tasks/Quests/Graph.svelte';
	import Checkbox from '$lib/Tasks/Quests/Checkbox.svelte';
	import Match from '$lib/Tasks/Quests/Match.svelte';
	import MultipleChoice from '$lib/Tasks/Quests/MultipleChoice.svelte';
	import MathInput from '$lib/Tasks/Quests/MathInput.svelte';
	import BooleanBtn from '$lib/Tasks/Quests/BooleanBtn.svelte';

	const { qId, sId, cId } = page.params;
	const quest = chapters[Number(cId)].sections[Number(sId)].quests[Number(qId)];

	let helpText = quest.tips ? parseInstructions(quest.tips) : parseInstructions(quest.instructions);

	//const displayTips = mathlifier([helpText] as unknown as TemplateStringsArray);
	const _questData = quest.questData || [];

	const command = quest.command || '';

	const maxQuests = quest.quantity;
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
		showModal = false;
		window.location.reload();
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
					// goto('./');
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
		// goto('./');
		// notifyParentFrame({ action: 'goback', url: '' });
	}

	let audioMissElement: HTMLAudioElement,
		audioHitElement: HTMLAudioElement,
		audioSkipElement: HTMLAudioElement,
		audioGoodEndingElement: HTMLAudioElement,
		audioBadEndingElement: HTMLAudioElement;

	let hitAudioSrc = '/correct.mp3';
	let missAudioSrc = '/wrong.mp3';
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
						questType={quest.questType}
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
						questType={quest.questType}
					/>
				{:else if quest.questType === 'Match'}
					<Match
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						questType={quest.questType}
						{command}
					/>
				{:else if quest.questType === 'MultipleChoice'}
					<MultipleChoice
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						questType={quest.questType}
						{command}
					/>
				{:else if quest.questType === 'Boolean'}
					<BooleanBtn
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						questType={quest.questType}
						{command}
					/>
				{:else if quest.questType === 'Graph'}
					<Graph
						bind:hasSubmitted={questComponents[i].hasSubmitted}
						bind:isCorrect={questComponents[i].isCorrect}
						bind:this={questComponents[i]}
						questData={_questData}
						questType={quest.questType}
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

<WisdomResultModal {correctCount} {incorrectCount} {showModal} {closeModal} />
