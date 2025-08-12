<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let totalAcertos: number;
	export let totalErros: number;

	const dispatch = createEventDispatcher();

	function hdlPlayAgain() {
		dispatch('play-again');
	}
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black"
	style="font-family: LuckiestGuy;"
>
	<div class="w-80 rounded-lg bg-white p-6 shadow-lg">
		<h2 class="mb-4 text-center text-3xl">Fim de Jogo!</h2>
		<section class="flex flex-col justify-center">
			<p class="inline-flex text-center text-xl">Acertos: {totalAcertos}</p>
			<p class="inline-flex text-center text-xl">Erros: {totalErros}</p>
		</section>

		<!-- Texto acima dos links de compartilhamento -->
		<section class="mt-4 text-center">
			<p class="text-xl font-semibold">Compartilhe seu resultado</p>
		</section>

		<!-- Botões de compartilhamento -->
		<section class="mt-4 flex justify-around">
			<!-- Compartilhar no Twitter -->
			<a
				href="https://twitter.com/intent/tweet?text=Acabei%20de%20desafiar%20minha%20mente%20no%20Fractions%20Enduro!%20Consegui%20acertar%20{totalAcertos}%20vezes%20e%20errar%20{totalErros}.%20Agora%20é%20a%20sua%20vez%20de%20mostrar%20quem%20domina%20as%20frações!%20Jogue%20em:%20https://drills-nine.vercel.app/game"
				target="_blank"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white"
				aria-label="Compartilhar no Twitter"
			>
				<img
					src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/X_twitter.svg"
					alt="Compartilhar no x.com ou twitter"
					class="h-8 w-8"
				/>
			</a>

			<!-- Compartilhar no Facebook -->
			<a
				href="https://www.facebook.com/sharer/sharer.php?u=https://drills-nine.vercel.app/game"
				target="_blank"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white"
				aria-label="Compartilhar no Facebook"
			>
				<img
					src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/facebook_filled.svg"
					alt="Compartilhar no facebook"
					class="h-8 w-8"
				/>
			</a>

			<!-- Compartilhar no WhatsApp -->
			<a
				href="https://wa.me/?text=Acabei%20de%20desafiar%20minha%20mente%20no%20Fractions%20Enduro!%20Consegui%20acertar%20{totalAcertos}%20vezes%20e%20errar%20{totalErros}.%20Agora%20é%20a%20sua%20vez%20de%20mostrar%20quem%20domina%20as%20frações!%20Jogue%20em:%20https://drills-nine.vercel.app/game"
				target="_blank"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white"
				aria-label="Compartilhar no WhatsApp"
			>
				<img
					src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/whatsapp.svg"
					alt="Compartilhar no whatsapp"
					class="h-8 w-8"
				/>
			</a>
		</section>
		<section class="mt-4 text-center">
			<p class="text-lg">
				Assinantes podem adicionar temas customizados <a
					href="https://aulazero.com.br"
					target="_blank"
					class="text-purple-600 hover:underline">saiba mais</a
				>.
			</p>
		</section>

		<button
			class="mt-4 w-full rounded-lg bg-purple-600 py-2 text-white"
			style="font-family: LuckiestGuy;"
			on:click={() => {
				hdlPlayAgain();
				// isGameOver = false; // Resetar o estado para continuar jogando ou reiniciar
				// stopAllMusic();
				// handleStartGameMusic();

				// handleStart(); // inicia o timer
				// runStep(); //run game
			}}
		>
			Jogar novamente
		</button>
	</div>
</div>
