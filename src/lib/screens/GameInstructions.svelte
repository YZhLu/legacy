<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let gameName: string; //Fractions Enduro!
	export let gameInstructions: string; //Antes que o tempo acabe, você deve decidir qual das duas frações apresentadas é a maior.

	const dispatch = createEventDispatcher();

	function handleStartGame() {
		dispatch('start-game');
	}
</script>

<!-- Exibe o modal até o jogo começar -->
<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-0"
	style="font-family: BebasNeue;"
>
	<div class="w-80 rounded-lg bg-white p-6 text-black shadow-lg">
		<h2 class="mb-4 text-center text-3xl">Bem-vindo ao {gameName}</h2>

		<!-- Instruções do Jogo -->
		<div class="mb-6">
			<h3 class="mb-2 text-2xl" style="font-family: BebasNeue;">Instruções:</h3>
			<p class="text-xl" style="font-family: BebasNeue;">
				{gameInstructions}<br />
			</p>
			<hr class="!border-t-2" />
			<div>
				<slot/>
			</div>
		</div>
		<!-- Botão para iniciar o jogo -->
		<div class="mb-4 text-center">
			<button
				class="w-full rounded-lg bg-purple-600 px-4 py-2 text-white focus:outline-none"
				on:click={() => handleStartGame()}
			>
				Start
			</button>
		</div>
	</div>
</div>
