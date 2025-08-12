<script lang="ts">
	import MathInput from '$lib/Tasks/Quests/MathInput.svelte';
	import { notifyParentFrame } from '$lib/utils/iframe';
	import { Progress } from '@skeletonlabs/skeleton-svelte';
	import { display } from 'mathlifier';

	export let text: string = '';
	export let progress: number = 0;
	export let usingApi: boolean;
	export let questStatusId: string = '';
	export let baseUrl: string;
	export let type: string = 'string';
	export let isTeacherMode: boolean = false;

	if (type === 'latex') {
		text = display(text);
	}

	let href: string = `${baseUrl}${questStatusId}`; //'/specifics/wisdom';
</script>

{#if usingApi && !isTeacherMode}
	<button
		onclick={() => notifyParentFrame({ action: 'go-quest', url: questStatusId })}
		id=""
		class=""
	>
		<div
			class:!outline-[#ffc700]={progress == 10}
			class:!border-[#ffc700]={progress == 10}
			class:!text-[#ffc700]={progress == 10}
			class:dark:!bg-surface-100-900={progress == 10}
			class="outline-surface-950 text-surface-950 border-surface-950 flex h-[69px] min-w-[80px] flex-col items-center justify-center rounded-2xl border-b-2 p-2 pb-0 outline-2 dark:border-white dark:text-white dark:outline-white"
		>
			<span class="text-md font2-bold pb-0.5">
				{@html text}
			</span>
			<span class="mt-0.5 -mb-0 w-10">
				<Progress value={progress} max={10} meterBg="bg-[#ffc700]" />
			</span>
		</div>
	</button>
{:else}
	<a {href}>
		<div
			class="outline-surface-950 text-surface-950 flex w-20 flex-col items-center justify-center rounded-md border-b-4 border-white p-2 outline-2 dark:text-white dark:outline-white"
		>
			<span class="text-md font-bold">
				{@html text}
			</span>
			<Progress value={progress} max={10} meterBg="bg-[#ffc700]" />
		</div>
	</a>
{/if}
