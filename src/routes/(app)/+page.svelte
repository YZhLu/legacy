<script lang="ts">
	
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	const discordSrc = 'https://discord.gg/aulazero';
	const githubSrc = 'https://github.com/skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Legacy</title>
	<meta
		name="description"
		content="Aprenda matemática, pague o que quiser - Aula Zero, o aluno em primeiro lugar!"
	/>
</svelte:head>
<footer class="sticky top-[calc(100vh-65px)] z-10">
	<AppBar>
		{#snippet lead()}{/snippet}
		
		{#snippet trail()}
			<span class="vr"></span>
			<a
				class="btn-icon hover:preset-tonal"
				href={githubSrc}
				target="_blank"
				title="GitHub"
				aria-label="GitHub"
			>
				<svg width="20" height="20" data-icon="github">
					<symbol id="ai:local:github" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						></path></symbol
					><use href="#ai:local:github"></use>
				</svg>
			</a>
			<a
				class="btn-icon hover:preset-tonal"
				href={discordSrc}
				target="_blank"
				title="Discord"
				aria-label="Discord"
			>
				<svg width="20" height="20" data-icon="discord">
					<symbol id="ai:local:discord" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"
						></path></symbol
					><use href="#ai:local:discord"></use>
				</svg>
			</a>
		{/snippet}
		<span class="h-full text-xs text-center flex items-center justify-center">Aprenda matemática, pague o que quiser! <br> Aula Zero - O aluno em primeiro lugar</span>
	</AppBar>
</footer>


<section class="flex flex-col justify-center !pt-0">
	<div class="mt-0">
		<!-- Título principal -->
		<h1 class="mb-6 text-center text-4xl leading-tight font-bold">
			Aula Zero Legacy<br />
		</h1>
		<h2 class="mb-6 text-center text-2xl leading-tight font-bold">
			Para encerrar seus problemas com matemática
		</h2>
	</div>
	<a class="btn self-center preset-filled-primary-500 btn-lg" href='./game'>Começar Agora</a>
	<div
		class="preset-filled-primary-100-9009 mt-20 mb-4 w-full card p-4 text-center text-lg font-light"
	>
		<p class="h4 mb-1">O essencial da matemática de forma simples, interativa e significativa.</p>
		<p>
			<!-- O Legacy é um jogo onde --> “O melhor jogo já feito para aprender matemática do zero e avançar passo a passo, um conceito de
			cada vez”
		</p>
		<!-- <p>de até a partir da prática , com foco na resolução de problemas do dia a dia.</p> -->
		<!-- <p>
			Se você é um professor, estudante ou entusiasta da matemática, este projeto é para você! O
			Legacy é uma plataforma de aprendizado online que visa tornar o ensino de matemática acessível
			e divertido para todos.
		</p>

		<p>
			Nosso objetivo é ajudar você a superar suas dificuldades com a matemática, oferecendo um
			conteúdo de qualidade, com foco na prática e na resolução de problemas do dia a dia.
		</p> -->
		<!-- <p>
			O Brasil figura nas últimas posições de praticamente qualquer ranking educacional em
			matemática.
		</p>
		<p>
			Em exames como o PISA, é comum que alunos brasileiros não consigam resolver questões simples,
			como calcular um troco em uma simulação de venda.
		</p>
		<p>
			Em geral, muitos não entendem o que estão estudando e sequer percebem a utilidade da
			matemática.
		</p>
		<p>
			Mas a matemática é uma linguagem universal, essencial para o desenvolvimento humano. No pior
			cenário, ela serve para você não ser enganado — seja pelo político com suas estatísticas
			duvidosas, seja pelo banqueiro com seus “investimentos” tortuosos.
		</p>
		<p>E é por isso que nasceu este projeto.</p> -->
	</div>
	<!-- <div class="mb-auto"></div> -->
</section>

<!-- <section></section> -->

<section
	class="flex min-h-screen flex-col items-center justify-center bg-surface-100-900 px-4 py-8 dark:text-white"
>
	<div class="preset--secondary-500 mb-4 w-full card p-4 text-center">
		<p>
			O Legacy é um projeto de código aberto que visa democratizar o ensino de matemática através de
			uma plataforma online, gratuita e acessível a todos.
		</p>
		<p>
			O objetivo é oferecer um conteúdo de qualidade, com foco na prática e na resolução de
			problemas do dia a dia.
		</p>
		<p>Nosso compromisso é com a educação de qualidade, sem barreiras financeiras.</p>
		<p>Se você apoia esse projeto, considere doar no seguinte endereço.</p>
	</div>
	<div class="flex w-full flex-col items-center justify-around md:flex-row">
		<!-- Imagem centralizada -->
		<div class="mb-6 flex w-full max-w-xs items-center justify-center">
			<picture>
				<img
					src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/azr-white-bg-transparent.svg"
					alt="Aula Zero Logo"
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
