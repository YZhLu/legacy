import { pauseTimer, startTimer, stopTimer, resetTimer, resetPartialTime } from '$lib/clock';




/* Game Atributes */
let gameName = 'SpeedyOps!';
let gameInstructions = 'Antes que o tempo acabe, você deve encontrar o resultado da expressão.';
// Declaração da variável 'audioMissElement' com o tipo do elemento HTMLAudioElement
let audioMissElement: HTMLAudioElement, audioHitElement: HTMLAudioElement;

/* Game Settings */
let theme: ThemeOption = /* 'dota2'; */ 'alirio';
let hitImageSrc = feedback[theme].hitImageSrc;
let missImageSrc = feedback[theme].missImageSrc;
let feedbackHitLength = feedback[theme].hitMessages.length;
let feedbackMissLength = feedback[theme].missMessages.length;
let feedbackMomentumLength = feedback[theme].momentum.length;
let hitAudioSrc = feedback[theme].hitAudioSrc;
let missAudioSrc = feedback[theme].missAudioSrc;
let timeBarProgress: number = 100; // A largura inicial da barra (100% no começo)
let initialTotalTime: number = 30000;
let totalTime = initialTotalTime;
let totalBarTime = initialTotalTime; // Tempo total do jogo (1 minuto em milissegundos)
let progressBarColor: string = 'bg-green-500'; // Cor inicial da barra
let delay = 500;
let muted = false;

/* Game Variables */
let message: string,
	score: number,
	totalScore: number,
	options: number[],
	time: number,
	lastPartialTime: number,
	hits: number,
	misses: number,
	count: number,
	hitStreak: number,
	missStreak: number,
	momentumCount: number,
	transitioning: boolean,
	isGameStarted: boolean,
	isGameOver: boolean,
	totalAcertos: number,
	totalErros: number,
	srcImg = '',
	processing: boolean;

/* Functions */

function initGame(): void {
	message = '';
	score = 0;
	totalScore = 0;
	operation = generateOperation();
	options = generateOptions();
	time = 0;
	lastPartialTime = 0; //| null = null;
	hits = 0;
	misses = 0;
	count = 1;
	hitStreak = 0;
	missStreak = 0;
	momentumCount = 0;
	transitioning = false;
	isGameStarted = false; // Controle do estado do jogo
	isGameOver = false; // Variável de estado para controlar o fim do jogo
	srcImg = '';
	processing = false;

	stopAllMusic();
	playBackgroundMusic();
	handleStart(); // inicia o timer
	runStep(); //run game
}

function getProgressColor() {
	if (timeBarProgress > 66) {
		return 'bg-green-500'; // Verde (mais tempo restante)
	} else if (timeBarProgress > 25 && timeBarProgress <= 66) {
		return 'bg-yellow-500'; // Amarelo (menos tempo restante)
	} else {
		return 'bg-red-500'; // Vermelho (urgente)
	}
}

function playAudioMiss(): void {
	audioHitElement.pause();
	audioMissElement.play();
}

function playAudioHit(): void {
	audioMissElement.pause();
	audioHitElement.play();
}

// Função para atualizar o tempo no componente
function updateTime(newTime: number, newLapTime: number) {
	time = newTime;
	lastPartialTime = newLapTime;
	timeBarProgress = time != 0 ? Math.max(0, ((totalBarTime - time) / totalBarTime) * 100) : 0.25; // Calcula a largura restante da barra (100% no início)
	progressBarColor = getProgressColor(); // Atualiza a cor da barra
}
// Controladores de evento para os botões
const handleStart = () => {
	startTimer(updateTime);
	processing = false;
};
const handlePause = () => pauseTimer();
const handleReset = () => resetTimer(updateTime);
const handleResetPartialTime = () => resetPartialTime(updateTime);
const handleStop = () => stopTimer(updateTime); // Usando a função stop
const handleEnd = () => {
	// Salvando as infos pro end screen
	totalAcertos = hits;
	totalErros = misses;
	totalScore = score;

	// Finalizando o jogo
	isGameOver = true;
	score = 0;
	// totalScore = 0;
	handleStop();
};

function runStep() {
	if (isGameOver) {
		handleEnd();
		return;
	}
	operation = generateOperation();
	options = generateOptions();

	transitioning = false;
	message = '';
	setTimeout(() => {
		handleResetPartialTime();
		handleStart();
	}, delay);
}

function generateOperation(): Operation {
	const operand1 = Math.floor(Math.random() * 10) + 1;
	const operand2 = Math.floor(Math.random() * 10) + 1;
	const operators = ['+', '-', '*', '/'];
	const operator = operators[Math.floor(Math.random() * operators.length)];
	const expression = `${operand1} ${operator} ${operand2}`;
	const result = eval(expression);
	const shouldRound = operator === '/'; // Arredonda apenas se a operação for divisão
	return { expression, result, shouldRound };
}

function generateWrongOptions(correctOption: string): number[] {
	const options: number[] = [];
	while (options.length < 2) {
		let wrongOption: string;
		if (operation.shouldRound) {
			// Arredonda as opções incorretas apenas se a operação for divisão
			wrongOption = getRandomInt(1, 100).toFixed(3);
		} else {
			wrongOption = getRandomInt(1, 100).toString();
		}
		const parsedOption = parseFloat(wrongOption);
		if (!options.includes(parsedOption) && parsedOption !== parseFloat(correctOption)) {
			options.push(parsedOption);
		}
	}
	//daqui até a linha tracejada tá quebrado não descomente(pode a apagar se fizer melhor)
	// const parsedOption = parseFloat(correctOption);
	// options.push(parsedOption + 1);
	// options.push(parsedOption - 1);
	//---------------------------------------------------------------------------------------;
	return options;
}

function generateOptions(): number[] {
	const correctOption = operation.shouldRound
		? operation.result.toFixed(3)
		: operation.result.toString();
	const wrongOptions = generateWrongOptions(correctOption);
	const shuffledOptions = shuffleArray([parseFloat(correctOption), ...wrongOptions]);
	return shuffledOptions;
}




// Função para iniciar o jogo
const hdlStartGame = (): void => {
	initGame();
	isGameStarted = true; // Marca o jogo como iniciado
};

const hdlPlayAgain = () => {
	location.reload();
};

function hdlMute(e: CustomEvent<any>): void {
	muted = e.detail.muted;
	audioMissElement.muted = muted;
	audioHitElement.muted = muted;
}

function hdlVolumeChanged(e: CustomEvent<any>): void {
	audioMissElement.volume = e.detail.audioVolume; // Aplica o volume ao áudio de "audioMissElement"
	audioHitElement.volume = e.detail.audioVolume; // Aplica o volume ao áudio de "audioHitElement"
}

let playEndGameMusic: () => void;
let stopAllMusic: () => void;
let playBackgroundMusic: () => void;

// Assinar o store para obter a função
// $: musicStore.subscribe((actions) => {
// 	playEndGameMusic = actions.playEndGameMusic;
// 	stopAllMusic = actions.stopAllMusic;
// 	playBackgroundMusic = actions.playBackgroundMusic;
// });

function handleOptionClick(option: number) {
	//console.log('User input:', userInput);
	//console.log('Selected option:', option);

	if (option === operation.result) {
		srcImg = hitImageSrc;
		audioMissElement.pause();
		if (muted === false) {
			playAudioHit();
		}

		if (lastPartialTime <= 500) {
			momentumCount++;
			score += 100;
		} else {
			momentumCount = 0;
		}

		if (momentumCount > 1) {
			message =
				momentumCount <= feedbackMomentumLength
					? feedback[theme].momentum[momentumCount - 2]
					: feedback[theme].momentum[feedbackMomentumLength - 1];
		} else {
			message =
				hitStreak < feedbackHitLength
					? feedback[theme].hitMessages[hitStreak]
					: feedback[theme].hitMessages[feedbackHitLength - 1];
		}

		hitStreak++;
		missStreak = 0;
		hits++;
		totalTime += 450;
		totalBarTime = totalTime;
		score += 50;
		//console.log('Correct answer! Score:', score);
	} else {
		srcImg = missImageSrc;
		audioHitElement.pause();
		if (muted === false) {
			playAudioMiss();
		}

		if (lastPartialTime <= 500) {
			momentumCount++;
			score -= 100;
		} else {
			momentumCount = 0;
		}

		message =
			missStreak < feedbackMissLength
				? feedback[theme].missMessages[missStreak]
				: feedback[theme].missMessages[feedbackMissLength - 1];
		momentumCount = 0;
		hitStreak = 0;
		missStreak++;
		misses++;
		totalTime -= 1500;
		totalBarTime = totalTime;
		score -= 50;
		//console.log('Wrong answer! Score:', score);
	}
	transitioning = true;
	setTimeout(() => runStep(), delay);

	//runStep();
	// operation = generateOperation();
	// options = generateOptions();
}

