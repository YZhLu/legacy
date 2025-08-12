<script lang="ts">
	import { feedback, type Theme, type ThemeOption } from '$lib/game/data/data';

	let {
		theme = $bindable('alirio'),
		isMuted = $bindable(false),
		isMusicMuted = $bindable(false),
		isEffectsMuted = $bindable(false),
		srcBackgroundMusic = '/1minute.mp3',
		srcEndGameMusic = '/endGameMusic.mp3',
		srcMenuMusic = '/menuMusic.mp3'
	} = $props<{
		theme: ThemeOption;
		srcBackgroundMusic?: string;
		srcEndGameMusic?: string;
		srcMenuMusic?: string;
	}>();

	let audioMissElement: HTMLAudioElement,
		audioHitElement: HTMLAudioElement,
		backgroundMusicElement: HTMLAudioElement,
		endGameMusicElement: HTMLAudioElement,
		menuMusicElement: HTMLAudioElement;

	// let theme: ThemeOption = /* 'dota2'; */ $state('alirio');

	// let muted = $state(false);
	let hitAudioSrc = $derived(feedback[theme as ThemeOption].hitAudioSrc);
	let missAudioSrc = $derived(feedback[theme as ThemeOption].missAudioSrc);

	/* Pause sounds */
	export const stopAllMusic = (): void => {
		pauseAudioMiss();
		pauseAudioHit();
		pauseBackgroundMusic();
		pauseEndGameMusic();
		pauseMenuMusic();
	};
	export const pauseBackgroundMusic = (): void => {
		backgroundMusicElement.pause();
	};
	export const pauseEndGameMusic = (): void => {
		endGameMusicElement.pause();
	};
	export const pauseMenuMusic = (): void => {
		menuMusicElement.pause();
	};
	export const pauseAudioMiss = (): void => {
		audioMissElement.pause();
	};
	export const pauseAudioHit = (): void => {
		audioHitElement.pause();
	};

	/* Play sounds */
	export const playBackgroundMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de fundo
		backgroundMusicElement.play();
	};
	export const playEndGameMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de fim de jogo
		endGameMusicElement.play();
	};
	export const playMenuMusic = (): void => {
		stopAllMusic(); // Parar outras músicas antes de tocar a música de menu
		menuMusicElement.play();
	};
	export function playAudioMiss(): void {
		audioHitElement.pause();
		audioMissElement.play();
	}
	export function playAudioHit(): void {
		audioMissElement.pause();
		audioHitElement.play();
	}

	/* Volume */
	export function hdlVolumeChanged(volume: number): void {
		backgroundMusicElement.volume = volume; // Aplica o volume ao áudio de "backgroundMusicElement"
		endGameMusicElement.volume = volume; // Aplica o volume ao áudio de "endGameMusicElement"
		menuMusicElement.volume = volume; // Aplica o volume ao áudio de "menuMusicElement"
		audioMissElement.volume = volume; // Aplica o volume ao áudio de "audioMissElement"
		audioHitElement.volume = volume; // Aplica o volume ao áudio de "audioHitElement"
	}
	export function hdlMusicVolumeChange(volume: number): void {
		backgroundMusicElement.volume = volume; // Aplica o volume ao áudio de "backgroundMusicElement"
		endGameMusicElement.volume = volume; // Aplica o volume ao áudio de "endGameMusicElement"
		menuMusicElement.volume = volume; // Aplica o volume ao áudio de "menuMusicElement"

		localStorage.setItem('musicVolume', String(volume));
	}
	export function hdlEffectsVolumeChange(volume: number): void {
		audioMissElement.volume = volume; // Aplica o volume ao áudio de "audioMissElement"
		audioHitElement.volume = volume; // Aplica o volume ao áudio de "audioHitElement"
		localStorage.setItem('effectsVolume', String(volume));
	}

	/* Mute */
	export function toggleMute(y: boolean): void {
		isMuted = y;
		backgroundMusicElement.muted = isMuted;
		endGameMusicElement.muted = isMuted;
		menuMusicElement.muted = isMuted;
		audioMissElement.muted = isMuted;
		audioHitElement.muted = isMuted;

		localStorage.setItem('isMuted', String(isMuted));
	}
	export function toggleMuteMusic(y: boolean): void {
		isMusicMuted = y;
		backgroundMusicElement.muted = isMusicMuted;
		endGameMusicElement.muted = isMusicMuted;
		menuMusicElement.muted = isMusicMuted;

		localStorage.setItem('isMusicMuted', String(isMusicMuted));
	}
	export function toggleMuteEffects(y: boolean): void {
		isEffectsMuted = y;
		audioMissElement.muted = isEffectsMuted;
		audioHitElement.muted = isEffectsMuted;

		localStorage.setItem('isEffectsMuted', String(isEffectsMuted));
	}
</script>

<audio bind:this={backgroundMusicElement} src={srcBackgroundMusic} preload="auto" loop></audio>
<audio bind:this={endGameMusicElement} src={srcEndGameMusic} preload="auto" loop></audio>
<audio bind:this={menuMusicElement} src={srcMenuMusic} preload="auto" loop></audio>
<audio bind:this={audioMissElement} src={missAudioSrc} preload="auto"></audio>
<audio bind:this={audioHitElement} src={hitAudioSrc} preload="auto"></audio>
