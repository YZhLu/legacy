<script lang="ts">
	let { hasSubmitted = false, isCorrect = false, correctContent, incorrectContent } = $props<{}>();
</script>

{#if hasSubmitted}
	<div class="mb-4">
		{#if isCorrect}
			<p class="font-bold text-green-600">Parabéns! Sua resposta está correta!</p>
			<p class="text-green-700">A resposta correta é:</p>
			{@render correctContent()}
		{:else}
			<div>
				<p class="mb-2 font-bold text-red-600">Resposta incorreta :(</p>
				<p class="text-red-700">A resposta correta é:</p>
				{@render incorrectContent()}
			</div>
		{/if}
	</div>
{/if}
