import { writable } from 'svelte/store';

// Store para gerenciar ações de música
export const musicStore = writable({
	stopAllMusic: () => {},
	playEndGameMusic: () => {},
	playBackgroundMusic: () => {}
});

// Funções de controle
const stopAllMusic = () => {
	console.log('Parando todas as músicas...');
};

const playEndGameMusic = () => {
	stopAllMusic();
	console.log('Tocando música de fim de jogo!');
};

const playBackgroundMusic = () => {
	stopAllMusic();
	console.log('Tocando música de fim de jogo!');
};

// Atualizar o store com as funções
musicStore.set({
	stopAllMusic,
	playEndGameMusic,
	playBackgroundMusic
});
