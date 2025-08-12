<script lang="ts">
	let { questStat = {} } = $props();
	let {
		grade = 0,
		attempts = 0,
		errors = 0,
		hits = 0,
		avgTime = '--',
		totalTime = '--'
	} = questStat;

	function msToMinutes(ms: number | string): string {
		if (typeof ms === 'string') return '--';
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return `${minutes}''${Number(seconds) < 10 ? '0' : ''}${seconds}'`;
	}
</script>

<span class="grid gap-1 py-2">
	<span class="text-xs"> 🏆 Nota:&nbsp;{grade} </span>
	<span class="text-xs"> 🕹️ Tentativas:&nbsp;{attempts} </span>
	<span class="text-xs"> ❌ Erros:&nbsp;{errors} </span>
	<span class="text-xs"> ✅ Acertos:&nbsp;{hits} </span>
	<span class="text-xs"> ⏱️ médio:&nbsp;{msToMinutes(avgTime)} </span>
	<span class="text-xs"> ⌛ total:&nbsp;{msToMinutes(totalTime)} </span>
</span>
