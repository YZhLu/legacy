<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import { Flame } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import QuestStats from '$lib/components/QuestStats.svelte';
	import Icon from '@iconify/svelte';
	// import { powerChapters } from '../../routes/api/student-[studentId]/power';

	let {
		powerChapters,
		questStatus,
		baseUrl = '/demo/power/',
		isTeacherMode = false,
		questStats = {}
	} = $props();

	let questLevel = 7; //mudar para parametro do banco

	let value = $state([powerChapters[questLevel].title]); ///* [questData.books[book].content.powerChapters[questLevel].title] */);

	let usingApi = baseUrl.includes('api');
</script>

<div class="flex flex-col items-center justify-center pt-4">
	<span class="flex pb-4 text-3xl font-bold"><!-- 9° ano --><Icon icon="game-icons:mighty-force" width="38" height="38" /> Força</span>
	<span class="pb-4 text-center text-xl font-bold">Vamos subir a carga!</span>
	<button
		class="disabled text-surface-950 w-72 rounded-2xl border-b-4 border-[#1273a1] bg-[#1cb0f6] p-4 px-5 font-bold md:w-96"
	>
		RAND OPS
	</button>

	<section class="py-10">
		<!-- flex w-92 flex-col p-8 md:w-[700px] -->
		<Accordion {value} onValueChange={(e) => (value = e.value)} multiple width="w-80 md:w-[550px]">
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
			{#each powerChapters as powerChapter, powerChapterIndex}
				<Accordion.Item value={powerChapter.title} classes="md:text-lg">
					<!-- Control -->
					<!-- {#snippet lead()}<Flame size={26} />{/snippet} -->
					{#snippet control()}
						<span class="grid" style="font-family: Nunito;">
							<span class="foont-bild text-surface-500 flex text-xs md:text-sm">
								Estágio {powerChapterIndex + 1}
							</span>
							<p class=" flex items-baseline text-lg font-bold">
								<!-- <Flame size={18} /> -->{powerChapter.title}
							</p>
						</span>
					{/snippet}

					<!-- Panel -->
					{#snippet panel()}
						<div class="grid gap-4 py-2" style="font-family: Nunito;">
							{#each powerChapter.sections as section, sectionIndex}
								<div class="md:text-lg">
									<p class="leading-tight">{section.title}</p>
									<div
										class="card mlt-2 psy-8 mb-1 flex flex-wrap justify-start gap-3.5 rounded-lg py-3 md:gap-4"
									>
										{#each section.quests as quest, questIndex}
											{#if isTeacherMode}
												<span class="grid gap-1 p-0">
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
													<QuestStats questStat={questStats[quest.id]}></QuestStats>
												</span>
											{:else}
												<Chip
													type={quest.type}
													{usingApi}
													questStatusId={''}
													text={`${quest.title}`}
													progress={5}
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
