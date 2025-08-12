<script lang="ts">
	import type { GraphTableRow } from '$lib/Tasks/Quests/types';

	let { tableData = $bindable([]), updTable } = $props<{
		tableData: GraphTableRow[];
		updTable: () => void;
	}>();
</script>

<div class="table-wrap" onchange={updTable}>
	<table class="table caption-bottom">
		<caption class="pt-4">Complete a tabela.</caption>
		<thead class="preset-filled-primary-500">
			<tr>
				<th>x</th>
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
						<input
							type="number"
							bind:value={row.x}
							class="w-full border-none bg-transparent text-center"
						/>
					</td>
					<td>
						<input
							type="number"
							bind:value={row.y}
							class="w-full border-none bg-transparent text-center"
						/>
					</td>
					{#if row.xy}
						<td>
							<input
								type="text"
								bind:value={row.xy}
								class="w-full border-none bg-transparent text-center"
							/>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
