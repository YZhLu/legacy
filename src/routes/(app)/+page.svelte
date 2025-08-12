<script lang="ts">
	import Page from '../backup/+page.svelte';
</script>

<svelte:head>
	<title>Legacy</title>
	<meta
		name="description"
		content="Aprenda matemática, pague o que quiser - Aula Zero, o aluno em primeiro lugar!"
	/>
</svelte:head>

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
	<button class="btn self-center preset-filled-primary-500 btn-lg">Começar Agora</button>
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
