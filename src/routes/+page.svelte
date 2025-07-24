<script lang="ts">
</script>

<svelte:head>
	<title>Legacy</title>
	<meta name="description" content="Rotinas de treino do Aula Zero" />
</svelte:head>

<section
	class="flex min-h-screen flex-col items-center justify-center px-4 py-8 dark:bg-surface-950 dark:text-white"
>
	<div class="flex w-full justify-around">
		<!-- Imagem centralizada -->
		<div class="mb-6 flex w-full max-w-xs items-center justify-center">
			<picture>
				<img
					src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/azr-white-bg-transparent.svg"
					alt="Dojo"
					class="h-auto w-80 max-w-xs"
				/>
			</picture>
		</div>

		<div class="mb-6 flex w-80 flex-col items-center justify-center">
			<picture class="my-4 flex flex-col">
				<img src="inter-logo.png" alt="inter-logo" class="h-auto w-20 max-w-xs" />
				<span class="self-end text-xs font-extralight">empresas</span>
			</picture>
			<p class="mb-1 text-center text-2xl font-bold">Pix</p>
			<p class="mb-8 text-center text-xs">Informe o valor quando for pagar</p>
			<picture>
				<img src="qrcode.png" alt="pix" class="h-auto w-52 max-w-xs" />
			</picture>

			<div class="w-80 self-start p-3">
				<hr class="my-4 hr" />

				<p class="mb-3.5 font-bold">Sobre o QR Code</p>
				<div class="flex items-center justify-between">
					<p class="mb-3.5 text-xs">Nome</p>
					<p class="mb-3.5 text-xs font-bold">AULA ZERO</p>
				</div>
				<div class="flex items-center justify-between">
					<p class="mb-3.5 text-xs">Chave Pix</p>
					<p class="mb-3.5 text-xs font-bold">49.079.681/0001-14</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-8">
		<!-- Título principal -->
		<h1 class="mb-6 text-center text-4xl leading-tight font-bold">
			Aula Zero Legacy<br />
		</h1>
		<h2 class="mb-6 text-center text-2xl leading-tight font-bold">
			Para encerrar seus problemas com matemática
		</h2>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		/* background: linear-gradient(135deg, #090057, #4c1d95); */
		padding: 4rem 2rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		line-height: 1.2;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 2rem;
	}

	/*.button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		border-radius: 0.75rem;
		background-color: transparent;
		border: 2px solid #090057;
		color: #090057;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.button:hover {
		background-color: #4c1d95;
		color: white;
		border-color: #4c1d95;
		transform: scale(1.05);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	.welcome img {
		display: block;
		max-width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}*/

	/* Responsividade */
	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.25rem;
		}
	}
</style>
