<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import { Slider } from '@skeletonlabs/skeleton-svelte';
	//import { questData } from '../../data';
	import { goto } from '$app/navigation';
	import { findQuest, findSectionTitle, parseInstructions } from '$lib/utils/quest';
	import { mathlifier, math, display } from 'mathlifier';
	import { onDestroy, onMount } from 'svelte';
	import { notifyParentFrame } from '$lib/utils/iframe';
	import { book_1_air } from '$lib/data/books/1/index';
	import { browser } from '$app/environment';

	// let { data }: PageProps = $props();

	const questData = book_1_air;

	const pathname = page.url.pathname;
	const { qId } = page.params;

	// const questStatus = data.questStatus.find((q: { id: string }) => q.id === questStatusId);
	const quest = findQuest(questData, qId);
	const sectionTitle = findSectionTitle(questData, qId);


	let value: number[] = $state([10]);
	let quantity = $state(quest.quantity);
	let instructions = $state(parseInstructions(quest.instructions));
	// console.log('quest', instructions);
	// instructions = parseInstructions(quest.instructions);

	onMount(() => {
		// Agora o redirecionamento só ocorrerá no navegador
		if (quantity && !instructions && browser) {
			goto(pathname + '/' + quantity);
		}

		// Função para detectar pressionamento de tecla
		const handleKeyDown = (event: KeyboardEvent) => {
			event.preventDefault(); // Previne o comportamento padrão das teclas TODOS INCLUSIVE OS DO NAVEGADOR

			//lógicas de acordo com as teclas
			if (event.key === 'Enter') {
				goto(pathname + '/' + value);
			} else if (event.key === 'Escape') {
				goto('./');
				// notifyParentFrame({ action: 'goback', url: `` });
			}
		};

		// Adicionar listener para o evento keydown
		window.addEventListener('keydown', handleKeyDown);

		// Limpeza ao desmontar o componente
		onDestroy(() => {
			window.removeEventListener('keydown', handleKeyDown);
		});
	});

	//isso me parece perigoso
	// const displayInstructions = mathlifier([instructions] as unknown as TemplateStringsArray);
	//isso precisa vir de algum lugar
	//Bhaskara: $$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$
	$effect(() => {
		// Send initial location and track changes
		// console.log('chamou effect no drills, wisdom', questStatusId);
		notifyParentFrame({ action: 'go-questStatus', url: qId });
	});

	function handleBack() {
		goto('./');
		notifyParentFrame({ action: 'goback', url: `` });
	}
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="flex h-16 w-full items-center px-4">
		<button onclick={handleBack} class="text-surface-700 m-auto self-start text-2xl">X</button>
		<span class="font-Nunito m-auto flex-1 text-center text-lg font-bold">
			{sectionTitle}
		</span>
		<div class="w-8"></div>
	</header>
	<hr class="hr" />
	<main class=" flex h-full w-full flex-col items-center justify-start overflow-x-auto py-4 md:p-4">
		<!-- style="font-family:Nunito" -->
		{#if instructions}
			<div
				class="bg-surface-100 dark:bg-surface-900 m-auto flex w-4/5 flex-col items-center justify-start gap-4 rounded-xl p-6 py-4 pb-64 md:rounded-2xl md:p-7 md:text-lg"
			>
				<div class="w-full max-w-full text-left">
					{@html instructions}
					
					<!-- {@html displayInstructions} -->
					<!-- {@html displayInstructions} -->
				</div>
			</div>
		{/if}
		{#if !quantity}
			<h2 class="pt-4 font-bold">Escolha quantas questões quer responder</h2>

			<div class="flex w-4/5 flex-col items-center justify-start gap-16 py-8 pt-4">
				<span class="inline-flex w-3/4">
					<Slider
						{value}
						min={10}
						onValueChange={(e) => (value = e.value)}
						markers={[10, 25, 50, 75, 100]}
					/>
				</span>
			</div>
		{/if}
	</main>
	<footer
		class="bg-surface-50 dark:bg-surface-950 flex w-full flex-row items-start justify-center gap-8 border-t-2 border-t-slate-700 px-4 py-10 font-[Nunito-Bold] md:gap-[35rem] md:py-11 md:pt-11"
	>
		<a
			href={pathname + '/' + value}
			class="text-surface-950 h-14 w-80 rounded-2xl border-b-4 border-[#1273a1] bg-[#1cb0f6] p-4 px-5 text-center font-bold"
		>
			Começar Lição
		</a>
	</footer>
</div>
