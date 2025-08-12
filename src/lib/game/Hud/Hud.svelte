<script lang="ts">
	import Controls from '$lib/game/Hud/Controls.svelte';
	import { pauseTimer, startTimer } from '$lib/clock';

	import Icon from '@iconify/svelte';
	import { feedback, type Theme, type ThemeOption } from '$lib/game/data/data';
	import Audio from '../Audio/Audio.svelte';

	import { onMount, type SvelteComponent } from 'svelte';
	import Settings from './Settings.svelte';
	import formatElapsedTime from '../utils/formatElapsedTime';

	let isInitialized = $state(false);
	let theme: ThemeOption = /* 'dota2'; */ $state('alirio');
	let isMuted = $state(false);
	let isPaused = $state(false);
	let isMusicMuted = $state(false);
	let isEffectsMuted = $state(false);
	let musicVolume = $state(0.5);
	let effectsVolume = $state(0.5);

	let { audioComponent = $bindable(), time = $bindable(0) } = $props<{
		audioComponent: SvelteComponent | undefined;
		time: number;
	}>();

	$effect(() => {
		if (!isInitialized) return;

		if (isMuted) {
			audioComponent.toggleMute(true);
			isEffectsMuted = true;
			isMusicMuted = true;
		} else {
			audioComponent.toggleMute(false);
			isEffectsMuted = false;
			isMusicMuted = false;
			audioComponent.playBackgroundMusic();
		}
	});

	$effect(() => {
		if (!isInitialized) return;

		if (isPaused) {
			audioComponent.stopAllMusic();
			audioComponent.playMenuMusic();
		} else {
			audioComponent.stopAllMusic();
			audioComponent.playBackgroundMusic();
		}
	});

	$effect(() => {
		if (!isInitialized) return;
		audioComponent.hdlEffectsVolumeChange(effectsVolume);
		audioComponent.hdlMusicVolumeChange(musicVolume);
		if (isEffectsMuted) {
			audioComponent.toggleMuteEffects(true);
		} else {
			audioComponent.toggleMuteEffects(false);
		}
		if (isMusicMuted) {
			audioComponent.toggleMuteMusic(true);
		} else {
			audioComponent.toggleMuteMusic(false);
		}
	});

	onMount(() => {
		const savedTheme = localStorage.getItem('theme'); // Tenta carregar o tema do localStorage
		const savedIsMuted = localStorage.getItem('isMuted');
		const savedEffectsVolume = localStorage.getItem('effectsVolume');
		const savedIsEffectsMuted = localStorage.getItem('isEffectsMuted');
		const savedMusicVolume = localStorage.getItem('musicVolume');
		const savedIsMusicMuted = localStorage.getItem('isMusicMuted');

		if (savedTheme) {
			theme = savedTheme as ThemeOption; // Se existir, define o tema com o valor armazenado
		}

		if (savedIsMuted) {
			isMuted = savedIsMuted === 'true';
		}

		if (savedEffectsVolume) {
			effectsVolume = parseFloat(savedEffectsVolume);
		}

		if (savedMusicVolume) {
			musicVolume = parseFloat(savedMusicVolume);
		}

		if (savedIsEffectsMuted !== null) {
			isEffectsMuted = savedIsEffectsMuted === 'true';
		}
		if (savedIsMusicMuted !== null) {
			isMusicMuted = savedIsMusicMuted === 'true';
		}

		isInitialized = true;
	});
</script>

<span
	class="fixed top-4 left-3 z-50 inline-flex w-fit items-center justify-end md:top-16 md:left-12"
>
	<button
		class="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-white shadow-md focus:outline-none md:h-12 md:w-12"
		onclick={() => location.reload()}
	>
		<Icon icon="icon-park-solid:back" width="30" height="30" />
	</button>
</span>

<p
	class="absolute top-50 left-4 z-50 -rotate-[20deg] text-3xl font-bold text-white md:top-40 md:left-14 md:text-4xl"
	style="font-family: SanMarinoBeach;"
>
	<!-- 2'58" -->
	{formatElapsedTime(time)}
</p>

<Settings
	bind:isMuted
	bind:isPaused
	bind:theme
	bind:musicVolume
	bind:effectsVolume
	bind:isEffectsMuted
	bind:isMusicMuted
/>
<Audio bind:this={audioComponent} bind:theme />

<!-- <Controls
	
	on:pause={() => pauseTimer()}
	on:start={handleStart}
	 -->
