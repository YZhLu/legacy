<script lang="ts">
	import type { CorrectAnswer, QuestData, Body, Option, GraphTableRow } from './types';
	import { normalizeText } from '$lib/utils/text';
	import { onMount, onDestroy } from 'svelte';
	import { initQuest } from '$lib/utils/quest';
	import Base from './Base.svelte';
	import GraphTable from '$lib/components/GraphTable.svelte';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		command,
		questData,
		questType
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		command: string;
		questData: QuestData[];
		questType: string;
	}>();

	let userAnswer = $state(''),
		isMounted = $state(false),
		graphElement = $state<HTMLElement>(),
		body = $state<Body>([{ type: '', content: '' }]),
		correctAnswer = $state<CorrectAnswer>([]),
		options = $state<Option[]>([]),
		calculator: any = $state(null),
		tableData = $state<GraphTableRow[]>([]);

	const xvalues = $derived(tableData.map((row) => row.x));
	const yvalues = $derived(tableData.map((row) => row.y));
	const xyvalues = $derived(tableData.map((row) => row.xy));

	export function checkAnswer() {
		updTable();
		calculator.setExpression({
			id: 'function1',
			type: 'expression',
			latex: body[0].content.split('~').join('') // This is the function that matches the points
		});

		for (let i = 0; i < xvalues.length; i++) {
			userAnswer += `${xvalues[i]};${yvalues[i]};${xyvalues[i]}`;
			if (i < xvalues.length - 1) {
				userAnswer += '';
			}
		}

		const tableRows = correctAnswer.map((cAns: Option) => cAns.content).join(';');

		const normalizedCorrectAnswer = normalizeText(tableRows);
		const normalizedUserAnswer = normalizeText(userAnswer);

		isCorrect = normalizedCorrectAnswer === normalizedUserAnswer;

		hasSubmitted = true;
	}

	function updTable() {
		calculator.setExpression({
			id: 'table1',
			type: 'table',
			columns: [
				{
					latex: 'x',
					values: xvalues
				},
				{
					latex: 'y',
					values: yvalues
				}
			]
		});
	}

	onMount(() => {
		const initialQuest = initQuest(questData);
		options = initialQuest.options;
		body = initialQuest.body;
		correctAnswer = initialQuest.correctAnswer;

		isMounted = true;

		if (questType === 'Graph') {
			tableData = options.map((option) => {
				const [x, y] = option.content.split(',');

				return {
					x: Number(x.split(' ').join('')),
					y: Number(y.split(' ').join('')),
					xy: `(${x.split(' ').join('')},${y.split(' ').join('')})`
				};
			});
		} else if (questType === 'GraphSimple') {
			tableData = options.map((option) => {
				const [x, y] = option.content.split(',');

				return {
					x: Number(x.split(' ').join('')),
					y: Number(y.split(' ').join(''))
				};
			});
		}

		// Initialize Desmos calculator

		if (graphElement && window.Desmos) {
			calculator = window.Desmos.GraphingCalculator(graphElement, {
				expressions: false
				// settingsMenu: true,
				// zoomButtons: true,
				// lockViewport: true,
				// showGrid: true,
				// showXAxis: true,
				// showYAxis: true
			});
			// calculator.setExpression({
			// 	id: 'table1',
			// 	type: 'table',
			// 	columns: [
			// 		{
			// 			latex: 'x',
			// 			values: [-2, -1, 0, 1, 2]
			// 		},
			// 		{
			// 			latex: 'y',
			// 			values: [4, 1, 0, 1, 4]
			// 		}
			// 	]
			// });

			calculator.setMathBounds({
				left: -5,
				right: 5,
				bottom: -5,
				top: 5
			});
		}
	});

	onDestroy(() => {
		if (calculator) {
			calculator.destroy();
		}
	});
</script>

<main class="mx-auto max-w-2xl p-4 text-gray-800" style="font-family: Nunito;">
	<Base {isCorrect} {hasSubmitted} {command} {body} {questType} bind:correctAnswer>
		{#snippet questContent()}
			{#if isMounted}
				<GraphTable {tableData} {updTable} />
			{/if}

			<div bind:this={graphElement} class="mx-auto aspect-square w-full rounded-lg border"></div>
		{/snippet}
	</Base>
</main>
