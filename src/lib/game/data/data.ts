export type ThemeOption = 'default' | 'dota2' | 'alirio';

export type Theme = {
	firstHit: string;
	momentum: string[];
	hitMessages: string[];
	hitImageSrc: string;
	hitAudioSrc: string;
	missMessages: string[];
	missImageSrc: string;
	missAudioSrc: string;
};
//'/miss_80.mp3';
//'/hit_gem.mp3';
interface Feedback {
	default: Theme;
	dota2: Theme;
	alirio: Theme;
}

export const feedback: Feedback = {
	default: {
		firstHit: 'Okay!',
		momentum: ['Great!', 'Amazing!', 'Unbelievable!', 'Perfect!'],
		hitMessages: ['Okay!'],
		hitImageSrc: '/hit.png',
		hitAudioSrc: '/hit_gem.mp3',
		missMessages: ['Incorreto. Tente novamente!'],
		missImageSrc: '/miss.png',
		missAudioSrc: '/miss_80.mp3'
	},
	dota2: {
		firstHit: 'First Blood!',
		momentum: ['Double Kill!', 'Triple Kill!', 'Ultrakill!', 'Rampage!'],
		hitMessages: [
			'Hit',
			'Gold',
			'Killing Spree!',
			'Dominating!',
			'Mega kill!',
			'Unstoppable!',
			'Monster Kill!',
			'Godlike!',
			'Beyond Godlike',
			'Holy Shit!'
		],
		hitImageSrc: '/hit.png',
		hitAudioSrc: '/hit_gem.mp3',
		missImageSrc: '/miss.png',
		missMessages: ['Miss!'],
		missAudioSrc: '/miss_80.mp3'
	},
	alirio: {
		firstHit: 'Ôxe',
		hitMessages: [
			'Uwwwnnn',
			'Tem como responder de uma forma menos medíocre?',
			'Menos medíocre pô',
			'Awwwnnn'
		],
		momentum: [
			'Aí que delícia!',
			'Awwwnnn acertinhooo!',
			'Olha como ele acerta!',
			'Inteligentinhoooo!',
			'Marca certinhooooo!',
			'Awwwwwwnnnnnnn'
		],
		hitImageSrc: '/hit.png',
		hitAudioSrc: '/hit_gem.mp3',
		missImageSrc: '/miss.png',
		missMessages: [
			'Errou.',
			'Vixe!',
			'Sabe nem responder.',
			'Está faltando técnica.',
			'Esse homi eh muito leigo!',
			'Aguarde o processo!',
			'Chega fiquei constrangido agora...'
		],
		missAudioSrc: '/miss_80.mp3'
	}
};
