export type GameSettings = {
	theme: string;
	hitImageSrc: string;
	missImageSrc: string;
	feedbackHitLength: number;
	feedbackMissLength: number;
	feedbackMomentumLength: number;
	hitAudioSrc: string;
	missAudioSrc: string;
	// timeBarProgress: 100, // A largura inicial da barra (100% no começo)
	// initialTotalTime: 30000,
	// totalTime : initialTotalTime,
	// totalBarTime : initialTotalTime, // Tempo total do jogo (1 minuto em milissegundos)
	// progressBarColor: string : 'bg-green-500', // Cor inicial da barra
	delay: number;
	muted: boolean;
};
