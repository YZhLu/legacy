<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';

	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	import QuestStats from '$lib/components/QuestStats.svelte';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';

	import { book_1_air } from '$lib/data/books/1/index';

	let books = [book_1_air];

	let bookIndex = $state(0);
	let book = $derived(books[bookIndex]);

	let chapters = $derived(book?.chapters);

	let {
		/* chapters */
		/* questStatus, */
		baseUrl = '/game/',
		isTeacherMode = false,
		questStats = {}
	} = $props();

	//let book = 0; //MUDA AQUI quando tiver outros livros, tem que ir para antes
	let questLevel = 0; //mudar para parametro do banco

	let level: any[] = $state([]);

	let usingApi = baseUrl.includes('api');

	onMount(async () => {
		level = [book.chapters[questLevel].title];
	});
</script>

<div class="flex flex-col items-center justify-center pt-4">
	<section class="py-10">
		<Accordion
			value={level}
			onValueChange={(e) => (level = e.value)}
			multiple
			width="w-80 md:w-[550px]"
		>
			{#snippet iconOpen()}
				<span class="-mt-3 flex self-start text-surface-500">
					<Icon icon="iconamoon:arrow-down-2-thin" width="38" height="38" />
				</span>
			{/snippet}
			{#snippet iconClosed()}
				<span class="-mt-3 flex self-start text-surface-500">
					<Icon icon="iconamoon:arrow-up-2-thin" width="38" height="38" />
				</span>
			{/snippet}
			{#each chapters as chapter, chapterIndex}
				<Accordion.Item value={chapter.title} classes="md:text-lg">
					{#snippet control()}
						<span class="grid" style="font-family: Nunito;">
							<span class="foont-bild flex text-xs text-surface-500 md:text-sm">
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
										class="mlt-2 psy-8 mb-1 flex flex-wrap justify-start gap-3.5 card rounded-lg py-3 md:gap-4"
									>
										{#each section.quests as quest, questIndex}
											{#if isTeacherMode}
												<span class="grid gap-1 p-0">
													<Chip {isTeacherMode} {usingApi} text={`Q${questIndex + 1}`} {baseUrl} />
													<QuestStats questStat={questStats[quest.id]}></QuestStats>
												</span>
											{:else}
												<Chip {usingApi} text={`Q${questIndex + 1}`} baseUrl={baseUrl + quest.id} />
											{/if}
										{/each}
									</div>
								</div>
							{/each}
						</div>
					{/snippet}
				</Accordion.Item>
				<hr class="mb-2 hr" />
			{/each}
		</Accordion>
	</section>
</div>
