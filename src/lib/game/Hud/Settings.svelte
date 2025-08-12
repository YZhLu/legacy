<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ThemeOption } from '../data/data';

	let {
		isMuted = $bindable(false),
		isMusicMuted = $bindable(false),
		isEffectsMuted = $bindable(false),
		isPaused = $bindable(false),
		musicVolume = $bindable(0.5),
		effectsVolume = $bindable(0.5),
		theme = $bindable('alirio')
	} = $props<{
		isMuted: boolean;
		isMusicMuted: boolean;
		isEffectsMuted: boolean;
		isPaused: boolean;
		musicVolume: number;
		effectsVolume: number;
		theme: ThemeOption;
	}>();
</script>

<!-- Botão settings -->
<span
	class="fixed top-4 right-3 z-50 inline-flex w-fit items-center justify-end md:top-16 md:right-12"
>
	<button
		class="rounded-lg bg-transparent text-white shadow-md focus:outline-none"
		onclick={() => (isPaused = true)}
	>
		<img
			class="w-10 md:w-12"
			src="https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/gear-white.svg"
			alt="Configurações"
		/>
	</button>
</span>

<!-- Botão sound -->
<span
	class="fixed top-16 right-3 z-50 inline-flex w-fit items-center justify-end md:top-[120px] md:right-12"
>
	<button
		class="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-white shadow-md focus:outline-none md:h-12 md:w-12"
		onclick={() => {
			isMuted = !isMuted;
		}}
	>
		{#if isMuted}
			<Icon icon="mdi:mute" width="34" height="34" />
		{:else}
			<Icon icon="mdi:volume-high" width="34" height="34" />
		{/if}
	</button>
</span>

{#if isPaused}
	<div
		class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
		style="font-family: LuckiestGuy;"
	>
		<div class="w-80 rounded-lg bg-white p-6 text-black shadow-lg">
			<h2 class="mb-4 text-center text-3xl" style="font-family: LuckiestGuy;">Áudio</h2>

			<!-- Controle de volume para efeitos sonoros -->
			<div class="mb-6">
				<label for="volume" class="mb-2 block text-lg" style="font-family: LuckiestGuy;">
					Efeitos Sonoros
				</label>
				<div class="grid grid-cols-[44px_auto]">
					<button
						class="button w-8 rounded-lg bg-transparent py-2 text-black focus:outline-none"
						onclick={() => (isEffectsMuted = !isEffectsMuted)}
						style="font-family: LuckiestGuy;"
					>
						<img
							src={isEffectsMuted || effectsVolume === 0
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
						bind:value={effectsVolume}
						class="w-full"
					/>
				</div>
				<!-- <p class="mt-2 text-center text-lg">{(effectsVolume * 100).toFixed(0)}%</p> -->

				<div class="mb-4"></div>
			</div>

			<!-- Controle de volume para músicas -->
			<div class="mb-6">
				<label for="musicVolume" class="mb-2 block text-lg" style="font-family: LuckiestGuy;">
					Músicas
				</label>
				<div class="grid grid-cols-[44px_auto]">
					<button
						class="button w-8 rounded-lg bg-transparent py-2 text-black focus:outline-none"
						onclick={() => (isMusicMuted = !isMusicMuted)}
						style="font-family: LuckiestGuy;"
					>
						<img
							src={isMusicMuted || musicVolume === 0
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
						class="w-full"
					/>
				</div>
			</div>

			<!-- Controle de Tema -->
			<div class="mb-6">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="mb-2 block text-lg" style="font-family: LuckiestGuy;">Tema</label>

				<!-- Seletor de Tema -->
				<select
					bind:value={theme}
					onchange={() => localStorage.setItem('theme', theme)}
					class="select block size-full border-2 border-black bg-white px-3 py-2 text-lg"
					style="font-family: LuckiestGuy;"
				>
					<option value="alirio">Alirio</option>

					<option value="dota2">Dota 2</option>
				</select>
			</div>

			<button
				class="w-full rounded-lg bg-red-500 px-4 py-2 text-white focus:outline-none"
				onclick={() => (isPaused = false)}
			>
				Fechar
			</button>
		</div>
	</div>
{/if}
