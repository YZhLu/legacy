<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	import { createEventDispatcher } from 'svelte';
	import { musicStore } from '$lib/game/Audio/audioStore';

	const dispatch = createEventDispatcher();

	export let muted: boolean;

	function hdlPause() {
		dispatch('pause');
	}
	function hdlStart() {
		dispatch('start');
	}

	function toggleMute() {
		muted = !muted;

		backgroundMusic.muted = muted;
		menuMusic.muted = muted;
		endGameMusic.muted = muted;

		// Salva o estado de mute no localStorage
		localStorage.setItem('muted', String(muted));

		dispatch('mute', { muted });
	}

	//settings
	let isSettingsOpen = false; // Controla a visibilidade do modal

	// theme settings
	export let theme: string = 'alirio';

	// Função para mudar o tema e salvar no localStorage
	const changeTheme = (newTheme: string) => {
		theme = newTheme;
		localStorage.setItem('theme', theme); // Salva o tema no localStorage
	};

	onMount(() => {
		const savedTheme = localStorage.getItem('theme'); // Tenta carregar o tema do localStorage
		const savedMuted = localStorage.getItem('muted');
		const savedAudioVolume = localStorage.getItem('audioVolume');
		const savedMusicVolume = localStorage.getItem('musicVolume');
		const savedMusicMuted = localStorage.getItem('musicMuted');

		if (savedTheme) {
			theme = savedTheme; // Se existir, define o tema com o valor armazenado
		}

		if (savedMuted !== null) {
			muted = savedMuted === 'true';

			backgroundMusic.muted = muted;
			endGameMusic.muted = muted;
			menuMusic.muted = muted;
			dispatch('mute', { muted });
		}

		if (savedAudioVolume) {
			audioVolume = parseFloat(savedAudioVolume);
			backgroundMusic.volume = audioVolume;
			endGameMusic.volume = audioVolume;
			menuMusic.volume = audioVolume;
		}

		if (savedMusicVolume) {
			musicVolume = parseFloat(savedMusicVolume);
			backgroundMusic.volume = musicVolume;
			endGameMusic.volume = musicVolume;
			menuMusic.volume = musicVolume;
		}

		if (savedMusicMuted !== null) {
			backgroundMusic.muted = savedMusicMuted === 'true';
			endGameMusic.muted = savedMusicMuted === 'true';
			menuMusic.muted = savedMusicMuted === 'true';
		}
	});

	let audioVolume = 0.8; // Volume inicial (1 é o volume máximo)

	let musicVolume = 0.8; // Volume inicial das músicas (max 1)
	// Função para controlar o volume das músicas
	const handleMusicVolumeChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		musicVolume = parseFloat(input.value);

		backgroundMusic.volume = musicVolume; // Ajusta o volume da música de fundo
		endGameMusic.volume = musicVolume; // Ajusta o volume da música do fim de jogo
		menuMusic.volume = musicVolume; // Ajusta o volume da música de menu

		// Salva o volume das músicas no localStorage
		localStorage.setItem('musicVolume', String(musicVolume));
	};

	// Função para alternar entre mutar/desmutar as músicas
	const toggleMuteMusic = (): void => {
		if (backgroundMusic.muted || endGameMusic.muted || menuMusic.muted) {
			backgroundMusic.muted = false;
			endGameMusic.muted = false;
			menuMusic.muted = false;
		} else {
			backgroundMusic.muted = true;
			endGameMusic.muted = true;
			menuMusic.muted = true;
		}
		// Salva o estado de mute das músicas no localStorage
		localStorage.setItem('musicMuted', String(backgroundMusic.muted));
	};

	let backgroundMusic: HTMLAudioElement;
	let endGameMusic: HTMLAudioElement;
	let menuMusic: HTMLAudioElement;

	// Função para pausar todas as músicas
	const stopAllMusic = (): void => {
		pauseBackgroundMusic();
		pauseEndGameMusic();
		pauseMenuMusic();
	};

	// Quando estiver no menu, toque a música do menu
	const handleMenuMusic = () => {
		playMenuMusic(); // Toca a música do menu
	};
	// Funções para tocar e pausar as músicas
	const playBackgroundMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de fundo
		backgroundMusic.play();
	};

	const pauseBackgroundMusic = (): void => {
		backgroundMusic.pause();
	};

	const playEndGameMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de fim de jogo
		endGameMusic.play();
	};

	const pauseEndGameMusic = (): void => {
		endGameMusic.pause();
	};

	const playMenuMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de menu
		menuMusic.play();
	};

	const pauseMenuMusic = (): void => {
		menuMusic.pause();
	};

	//music
	export let srcBackgroundMusic: string = '/1minute.mp3';
	export let srcEndGameMusic: string = '/endGameMusic.mp3';
	export let srcMenuMusic: string = '/menuMusic.mp3';

	// Funções para manipular o volume do áudio
	const handleVolumeChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		audioVolume = parseFloat(input.value);

		// Salva o volume no localStorage
		localStorage.setItem('audioVolume', String(audioVolume));

		dispatch('volume-changed', {
			audioVolume
		});
	};

	// Quando o jogo começar
	const handleStartGameMusic = () => {
		playBackgroundMusic(); // Toca a música de fundo ao iniciar o jogo
	};

	// Atualizar as ações no store
	musicStore.update((actions) => {
		actions.playEndGameMusic = () => {
			//actions.stopAllMusic();
			//endGameMusic.play();
			playEndGameMusic();
		};

		actions.playBackgroundMusic = () => {
			//actions.stopAllMusic();
			//endGameMusic.play();
			playBackgroundMusic();
		};
		actions.stopAllMusic = () => {
			//actions.stopAllMusic();
			//endGameMusic.play();
			stopAllMusic();
		};

		return actions;
	});
	$: {
		theme;
	}
</script>

<audio bind:this={backgroundMusic} src={srcBackgroundMusic} preload="auto" loop></audio>
<audio bind:this={endGameMusic} src={srcEndGameMusic} preload="auto" loop></audio>
<audio bind:this={menuMusic} src={srcMenuMusic} preload="auto" loop></audio>

<!-- Botão settings -->
<span
	class="fixed top-4 right-3 z-50 inline-flex w-fit items-center justify-end md:top-16 md:right-12"
>
	<button
		class="rounded-lg bg-transparent text-white shadow-md focus:outline-none"
		on:click={() => ((isSettingsOpen = true), hdlPause(), handleMenuMusic())}
	>
		<img
			class="w-10 md:w-12"
			src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/gear-white.svg"
			alt="Configurações"
		/>
	</button>
</span>

<!-- Botão sound -->
<span class="fixed top-16 md:top-[120px] right-3 z-50 inline-flex w-fit items-center justify-end md:right-12">
	<button
		class="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-white shadow-md focus:outline-none md:h-12 md:w-12"
		on:click={toggleMute}
	>
		{#if muted}<!--!Mudar para musica-->
			<Icon icon="mdi:mute" width="34" height="34" />
		{:else}
			<Icon icon="mdi:volume-high" width="34" height="34" />
		{/if}
	</button>
</span>

<!-- Modal de Configurações -->
{#if isSettingsOpen}
	<div
		class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
		style="font-family: LuckiestGuy;"
	>
		<div class="w-80 rounded-lg bg-white p-6 text-black shadow-lg">
			<h2 class="mb-4 text-center text-3xl" style="font-family: LuckiestGuy;">Áudio</h2>

			<!-- Controle de volume para efeitos sonoros -->
			<div class="mb-6">
				<label for="volume" class="mb-2 block text-lg" style="font-family: LuckiestGuy;"
					>Efeitos Sonoros</label
				>
				<div class="grid grid-cols-[44px_auto]">
					<button
						class="button w-8 rounded-lg bg-transparent py-2 text-black focus:outline-none"
						on:click={toggleMute}
						style="font-family: LuckiestGuy;"
					>
						<img
							src={muted
								? 'https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/muted_speaker.svg'
								: 'https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/speaker.svg'}
							alt="Mutar efeitos sonoros"
							width="44px"
						/>
					</button>
					<input
						id="volume"
						type="range"
						min="0"
						max="1"
						step="0.01"
						bind:value={audioVolume}
						on:input={handleVolumeChange}
						class="w-full"
					/>
				</div>
				<!-- <p class="mt-2 text-center text-lg">{(audioVolume * 100).toFixed(0)}%</p> -->

				<div class="mb-4"></div>
			</div>

			<!-- Controle de volume para músicas -->
			<div class="mb-6">
				<label for="musicVolume" class="mb-2 block text-lg" style="font-family: LuckiestGuy;"
					>Músicas</label
				>
				<div class="grid grid-cols-[44px_auto]">
					<button
						class="button w-8 rounded-lg bg-transparent py-2 text-black focus:outline-none"
						on:click={toggleMuteMusic}
						style="font-family: LuckiestGuy;"
					>
						<img
							src={backgroundMusic.muted || endGameMusic.muted || menuMusic.muted
								? 'https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/muted_speaker.svg'
								: 'https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/speaker.svg'}
							alt="Mutar efeitos sonoros"
							width="44px"
						/>
					</button>
					<input
						id="musicVolume"
						type="range"
						min="0"
						max="1"
						step="0.01"
						bind:value={musicVolume}
						on:input={handleMusicVolumeChange}
						class="w-full"
					/>
				</div>
				<!-- <p class="mt-2 text-center text-lg">{(musicVolume * 100).toFixed(0)}%</p> -->
			</div>

			<!-- Botão de mutar/desmutar músicas -->

			<!-- Botão de mutar/desmutar -->

			<!-- Controle de Tema -->
			<script>
				let theme = ''; // Variável para armazenar o tema selecionado

				// Função para alterar o tema quando selecionado no dropdown
				function changeTheme() {
					console.log(`Tema selecionado: ${theme}`);
					// Aqui você pode adicionar a lógica para mudar o tema da aplicação
				}
			</script>

			<!-- Controle de Tema -->
			<div class="mb-6">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="mb-2 block text-lg" style="font-family: LuckiestGuy;">Tema</label>

				<!-- Seletor de Tema -->
				<select
					bind:value={theme}
					on:change={() => changeTheme(theme)}
					class="select block w-full border-2 border-black bg-white px-3 py-2 text-lg"
					style="font-family: LuckiestGuy;"
				>
					<option value="alirio">Alirio</option>

					<option value="dota2">Dota 2</option>
				</select>
			</div>

			<!-- <div class="mb-6">
				<label class="mb-2 block text-lg" style="font-family: LuckiestGuy;">Tema</label>
				<div class="flex justify-between">
					<button
						class={`w-24 py-2 text-white ${theme === 'alirio' ? 'bg-blue-500' : 'bg-gray-300'}`}
						on:click={() => changeTheme('alirio')}
						style="font-family: LuckiestGuy;"
					>
						Alirio
					</button>
					<button
						class={`w-24 py-2 text-white ${theme === 'dota2' ? 'bg-green-500' : 'bg-gray-300'}`}
						on:click={() => changeTheme('dota2')}
						style="font-family: LuckiestGuy;"
					>
						Dota 2
					</button>
				</div>
			</div> -->

			<!-- Botão para fechar o modal -->
			<button
				class="w-full rounded-lg bg-red-500 px-4 py-2 text-white focus:outline-none"
				on:click={() => (
					(isSettingsOpen = false), stopAllMusic(), handleStartGameMusic(), hdlStart()
				)}
			>
				Fechar
			</button>
		</div>
	</div>
{/if}
