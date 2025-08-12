<script lang="ts">
	import type { Drill } from '$lib/game/types/Drill';
	import type { Body, CorrectAnswer, Option } from '$lib/Tasks/Quests/types';

	import QuestField from '$lib/components/QuestField.svelte';
	import initDrill from '$lib/game/functions/initDrill';
	import handleKeyDown from '$lib/game/functions/IO/keyboard/handleKeyDown';

	import { shuffleArray } from '$lib/utils/shuffle';
	import { onMount, onDestroy, type SvelteComponent } from 'svelte';

	import { feedback, type Theme, type ThemeOption } from '$lib/game/data/data';
	import { handleOptionClick } from '$lib/game/functions/IO/keyboard/handleOptionClick';
	import Hud from '$lib/game/Hud/Hud.svelte';
	import type { GameVariables } from '$lib/game/types/GameVariables';
	import type { GameSettings } from '$lib/game/types/GameSettings';
	import type { GameMethods } from '$lib/game/types/GameMethods';
	import { resetPartialTime, startTimer, stopTimer } from '$lib/clock';

	let {
		isCorrect = $bindable(false),
		hasSubmitted = $bindable(false),
		drill = $bindable<Drill>({
			title: '0..99 + ?',
			id: 'randomUUID()',
			quantity: 15,
			type: 'speed',
			scope: `{
				"x1":{"min":0,"max":99,"round":0,"notNull":false},
				"x2":{"min":0,"max":99,"round":0,"notNull":true},
				"x3":{"min":-3,"max":3,"round":0,"notNull":true},
				"a": "|x1| + |x2|",
				"b": "|a| + |x3|",
				"c":{"min":0,"max":99,"round":0,"notNull":true}
				}`,
			correctAnswer: [{ type: 'latex', content: '|a|' }],
			body: [{ type: 'latex', content: '\\mathbf{|x1| |x2| = ?}' }],
			options: [
				{ type: 'latex', content: '|a|' },
				{ type: 'latex', content: '|b|' },
				{ type: 'latex', content: '|c|' }
			]
		})
	} = $props<{
		hasSubmitted: boolean;
		isCorrect: boolean;
		drill: Drill;
	}>();

	let audioComponent: SvelteComponent | undefined = $state<SvelteComponent | undefined>(undefined);

	let body = $state<Body>([]),
		correctAnswer = $state<CorrectAnswer>([]),
		userAnswer = $state<string>(''),
		isMounted = $state(false),
		options = $state<Option[]>([]);

	let gameVariables: GameVariables = $state({
		isGameStarted: false,
		transitioning: false,
		theme: 'alirio',
		srcImg: 'https://i.imgur.com/2Xk0v4H.png',
		message: '',
		score: 0,
		totalScore: 0,
		time: 0,
		lastPartialTime: 0,
		hits: 0,
		misses: 0,
		count: 0,
		hitStreak: 0,
		missStreak: 0,
		momentumCount: 0,
		isGameOver: false,
		totalAcertos: 0,
		totalErros: 0,
		processing: false
	});

	let gameMethods: GameMethods = $state({
		playAudioHit: () => {
			audioComponent?.playAudioHit();
		},
		playAudioMiss: () => {
			audioComponent?.playAudioMiss();
		},
		nextRound: () => {
			const initialQuest = initDrill(drill);
			options = shuffleArray(initialQuest.options);
			body = initialQuest.body;
			correctAnswer = initialQuest.correctAnswer;
			userAnswer = '';
		},
		runStep: () => {
			if (gameVariables.hits >= drill.quantity) {
				gameMethods.handleEnd();
				return;
			}
			if (gameVariables.isGameOver) {
				// handleEnd();
				return;
			}

			resetPartialTime(updateTime);
			startTimer(updateTime);
		},
		handleEnd: () => {
			stopTimer(updateTime);
			gameVariables.isGameOver = true;
			gameVariables.message = 'Game Over';
			gameVariables.processing = false;
			alert(
				`Game Over 
				Você atingiu o número máximo de acertos. Parabéns!
				info`
			);
		}
	});

	let gameSettings: GameSettings = $state({
		theme: /* 'dota2'; */ 'alirio',
		hitImageSrc: feedback['alirio'].hitImageSrc,
		missImageSrc: feedback['alirio'].missImageSrc,
		feedbackHitLength: feedback['alirio'].hitMessages.length,
		feedbackMissLength: feedback['alirio'].missMessages.length,
		feedbackMomentumLength: feedback['alirio'].momentum.length,
		hitAudioSrc: feedback['alirio'].hitAudioSrc,
		missAudioSrc: feedback['alirio'].missAudioSrc,
		// timeBarProgress: 100, // A largura inicial da barra (100% no começo)
		// initialTotalTime: 30000,
		// totalTime : initialTotalTime,
		// totalBarTime : initialTotalTime, // Tempo total do jogo (1 minuto em milissegundos)
		// progressBarColor: string : 'bg-green-500', // Cor inicial da barra
		delay: 500,
		muted: false
	});

	function initGame() {
		// Inicializa o jogo
		gameVariables = {
			...gameVariables,
			isGameStarted: false,
			transitioning: false,
			theme: 'alirio',
			srcImg: 'https://i.imgur.com/2Xk0v4H.png',
			message: '',
			score: 0,
			totalScore: 0,
			time: 0,
			lastPartialTime: 0,
			hits: 0,
			misses: 0,
			count: 0,
			hitStreak: 0,
			missStreak: 0,
			momentumCount: 0,
			isGameOver: false,
			totalAcertos: 0,
			totalErros: 0,
			processing: false
		};

		gameVariables.isGameStarted = true;
		startTimer(updateTime);
	}

	function updateTime(newTime: number, newLapTime: number) {
		gameVariables.time = newTime;
		gameVariables.lastPartialTime = newLapTime;
		// gameVariables.timeBarProgress = time != 0 ? Math.max(0, ((totalBarTime - time) / totalBarTime) * 100) : 0.25; // Calcula a largura restante da barra (100% no início)
		// progressBarColor = getProgressColor(); // Atualiza a cor da barra
	}

	onMount(() => {
		// const initialQuest = initDrill(drill);
		// options = shuffleArray(initialQuest.options);
		// body = initialQuest.body;
		// correctAnswer = initialQuest.correctAnswer;
		// userAnswer = '';

		gameMethods.nextRound();
		// Adicionar listener para o evento keydown
		window.addEventListener('keydown', (event) =>
			handleKeyDown(
				event,
				options,
				handleOptionClick,
				correctAnswer,
				gameVariables,
				gameMethods,
				gameSettings
			)
		);

		onDestroy(() => {
			window.removeEventListener('keydown', (event) =>
				handleKeyDown(
					event,
					options,
					handleOptionClick,
					correctAnswer,
					gameVariables,
					gameMethods,
					gameSettings
				)
			);
		});

		initGame();
		// isMounted = true;
	});
</script>

<Hud bind:audioComponent bind:time={gameVariables.time} />

{#if gameVariables.isGameStarted}
	<main class=" flex h-screen flex-col items-center justify-center">
		<div
			class:invisible={!gameVariables.transitioning}
			class="absolute -right-1 z-50 flex flex-col items-center justify-center"
		>
			<span class="max-h-[300px] max-w-[300px]">
				<img
					class:invisible={false}
					alt={gameVariables.theme}
					height="300"
					width="300"
					src={gameVariables.srcImg}
				/>
			</span>
		</div>
		<div
			class:invisible={!gameVariables.transitioning}
			class="absolute -left-1 z-50 mr-auto flex scale-x-[-1] flex-col items-center justify-center"
		>
			<span class="max-h-[300px] max-w-[300px]">
				<img
					class:invisible={false}
					alt={gameVariables.theme}
					height="300"
					width="300"
					src={gameVariables.srcImg}
				/>
			</span>
		</div>
		<span
			class="absolute top-1/5 z-10 w-[60%] items-center justify-center shadow-md md:top-14 md:w-[40%]"
		>
			<div class="realistic-marker-highlight container rounded-lg before:w-[calc(100%+1.75rem)]">
				<QuestField
					field={body}
					classes="flex w-full flex-col items-center p-2 text-center text-3xl font-bold text-[#090057] md:text-4xl"
				/>
			</div>
		</span>

		<div
			class="absolute top-0 left-1/2 grid h-screen w-full -translate-x-1/2 grid-cols-3 grid-rows-1 [&>*:nth-child(1)]:bg-[#007e00] [&>*:nth-child(2)]:bg-[#f6ae2d] [&>*:nth-child(3)]:bg-[#f26419]"
		>
			{#each options as option}
				<button
					class="button z-0 box-border flex h-full w-full cursor-pointer items-center justify-center text-3xl font-bold text-white md:text-6xl"
					onclick={() =>
						handleOptionClick(correctAnswer, option, gameVariables, gameMethods, gameSettings)}
				>
					<span></span>
					<span class="mt-1/3">
						{option.content}
					</span>
				</button>
			{/each}
		</div>

		<div
			class="absolute top-1/3 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
		>
			<p
				class="w-[120%] bg-white text-center text-4xl text-[#090057]"
				style="font-family: NoContinue;"
			>
				{gameVariables.message}
			</p>
		</div>
	</main>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters" style="display:none;">
		<defs>
			<filter id="marker-shape">
				<feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
				<feDisplacementMap
					xChannelSelector="R"
					yChannelSelector="G"
					scale="30"
					in="SourceGraphic"
					in2="warp"
				/>
			</filter>
		</defs>
	</svg>
{/if}

<!-- {#each Object.values(gameVariables) as gv, i}
	{i}-{gv}<br />
{/each} -->

<style>
	.realistic-marker-highlight {
		position: relative;
	}

	.realistic-marker-highlight:before {
		content: ' ';
		/* background-color: #ff6db7; */
		background-color: #fff;
		/* width: calc(100% + 2.75rem) */ /* 100% */
		height: 100% /* 1em */;
		position: absolute;
		z-index: -1;
		filter: url(#marker-shape);
		left: -0.25em /* -0.25em */;
		top: 0%; /* 0.61em; */
		padding: 0 0.25em;
		margin-left: -1; /* new */
	}
</style>
