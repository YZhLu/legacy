<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import { Flame } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	//import { questData } from '../../routes/api/data';
	import QuestStats from '$lib/components/QuestStats.svelte';
	import Icon from '@iconify/svelte';
	// import type { Book } from '$lib/types/Book';

	// import { books } from '$lib/data/books/index';
	import { onMount } from 'svelte';
	//import { books } from '$lib/data/books/index';
	import { book_4_fire } from '$lib/data/books/4/index';

	let books = [book_4_fire];

	let bookIndex = $state(0);
	let book = $derived(books[bookIndex]);

	let chapters = $derived(book?.chapters);

	let {
		/* chapters */
		questStatus,
		baseUrl = '/demo/wisdom/',
		isTeacherMode = false,
		questStats = {}
	} = $props();

	//let book = 0; //MUDA AQUI quando tiver outros livros, tem que ir para antes
	let questLevel = 2; //mudar para parametro do banco

	let level: any[] = $state([]);
	//let value = $state([questData.books[book].content.chapters[questLevel].title]); ///* [questData.books[book].content.chapters[questLevel].title] */);

	let usingApi = baseUrl.includes('api');

	// let books = [
	// 	{
	// 		id: 1,
	// 		name: '1'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: '2'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: '3'
	// 	},
	// 	{
	// 		id: 4,
	// 		name: '4'
	// 	}
	// ];

	onMount(async () => {
		level = [book.chapters[questLevel].title];
	});
</script>

<div class="flex flex-col items-center justify-center pt-4">
	<span class="flex items-center pb-4 text-3xl font-bold">
		<!-- 9° ano -->
		<Flame size={40} />
		Livro <!-- 4 -->
		<select
			name="books"
			id="books"
			class=" bg-surface-50-950 -mr-3 w-[83px] border-none py-0 text-3xl font-bold"
			value={4}
			onchange={(e) => {
				// classroomId = e.currentTarget.value;
				console.log(e);
				bookIndex = Number(e.currentTarget.value);
				// goto(`${page.url.origin}/${classroomId}`);
			}}
		>
			{#each books as book, i}
				<option value={i + 4}> {i + 4}</option>
			{/each}
		</select>
	</span>
	<span class="pb-4 text-center font-bold md:text-xl">Vamos aprender matemática!</span>
	<button
		class="disabled text-surface-950 w-72 rounded-2xl border-b-4 border-[#1273a1] bg-[#1cb0f6] p-4 px-5 font-bold md:w-96"
	>
		RAND OPS
	</button>

	<section class="py-10">
		<!-- flex w-92 flex-col p-8 md:w-[700px] -->
		<Accordion
			value={level}
			onValueChange={(e) => (level = e.value)}
			multiple
			width="w-80 md:w-[550px]"
		>
			{#snippet iconOpen()}
				<span class="text-surface-500 -mt-3 flex self-start">
					<Icon icon="iconamoon:arrow-down-2-thin" width="38" height="38" />
				</span>
			{/snippet}
			{#snippet iconClosed()}
				<span class="text-surface-500 -mt-3 flex self-start">
					<Icon icon="iconamoon:arrow-up-2-thin" width="38" height="38" />
				</span>
			{/snippet}
			{#each chapters as chapter, chapterIndex}
				<Accordion.Item value={chapter.title} classes="md:text-lg">
					<!-- Control -->
					<!-- {#snippet lead()}<Flame size={26} />{/snippet} -->
					{#snippet control()}
						<span class="grid" style="font-family: Nunito;">
							<span class="foont-bild text-surface-500 flex text-xs md:text-sm">
								CAPÍTULO {chapterIndex + 1}
							</span>
							<p class="flex items-baseline text-lg font-bold">
								<!-- <Flame size={18} /> -->{chapter.title}
							</p>
						</span>
					{/snippet}

					<!-- Panel -->
					{#snippet panel()}
						<div class="grid gap-4 py-2" style="font-family: Nunito;">
							{#each chapter.sections as section, sectionIndex}
								<div class="md:text-lg">
									<p class="leading-tight">{section.title}</p>
									<div
										class="card mlt-2 psy-8 mb-1 flex flex-wrap justify-start gap-3.5 rounded-lg py-3 md:gap-4"
									>
										{#each section.quests as quest, questIndex}
											{#if isTeacherMode}
												<span class="grid gap-1 p-0">
													<Chip
														{isTeacherMode}
														{usingApi}
														questStatusId={questStatus.find(
															(q: { questId: string }) => q.questId === quest.id
														).id}
														text={`Q${questIndex + 1}`}
														progress={questStatus.find(
															(q: { questId: string }) => q.questId === quest.id
														).status / 10}
														{baseUrl}
													/>
													<QuestStats questStat={questStats[quest.id]}></QuestStats>
												</span>
											{:else}
												<Chip
													{usingApi}
													questStatusId={questStatus.find(
														(q: { questId: string }) => q.questId === quest.id
													).id}
													text={`Q${questIndex + 1}`}
													progress={questStatus.find(
														(q: { questId: string }) => q.questId === quest.id
													).status / 10}
													{baseUrl}
												/>
											{/if}
										{/each}
									</div>
								</div>
							{/each}
						</div>
					{/snippet}
				</Accordion.Item>
				<hr class="hr mb-2" />
			{/each}
		</Accordion>
	</section>
</div>
