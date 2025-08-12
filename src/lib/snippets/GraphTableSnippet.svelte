<script lang="ts">
	import type { CorrectAnswer, Option } from '$lib/Tasks/Quests/types';

	let { correctAnswer, questType } = $props<{
		correctAnswer: CorrectAnswer;
		questType: string;
	}>();

	const tableRows = correctAnswer.map((cAns: Option) => cAns.content);
	console.log('tableRows', tableRows);
	const tableData = questType === 'Graph'
		? tableRows.map((row: string) => {
				const [x, y, xy] = row.split(';');
				return {
					x: x.split(' ').join(''),
					y: y.split(' ').join(''),
					xy: xy.split(' ').join('')
				};
			})
		: tableRows.map((row: string) => {
				const [x, y] = row.split(';');
				return {
					x: x.split(' ').join(''),
					y: y.split(' ').join('')
				};
			});
			
</script>

<div class="table-wrap">
	<table class="table caption-bottom">
		<thead>
			<tr class="text-black">
				<th> x</th>
				<th>y</th>
				{#if tableData[0].xy}
					<th>(x,y)</th>
				{/if}
			</tr>
		</thead>
		<tbody class="[&>tr]:hover:preset-tonal-primary preset-filled">
			{#each tableData as row}
				<tr>
					<td>
						{row.x}
					</td>
					<td>
						{row.y}
					</td>
					{#if row.xy}
						<td>
							{row.xy}
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
