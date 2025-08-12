import { feedback, type ThemeOption } from '$lib/game/data/data';
import type { GameMethods } from '$lib/game/types/GameMethods';
import type { CorrectAnswer, Option } from '$lib/Tasks/Quests/types';
import type { GameSettings } from '../../../types/GameSettings';
import type { GameVariables } from '../../../types/GameVariables';
import checkAnswer from '../../../utils/checkAnswer';

export function handleOptionClick(
	correctAnswer: CorrectAnswer,
	option: Option,
	gameVariables: GameVariables,
	gameMethods: GameMethods,
	gameSettings: GameSettings
): void {
	const themeFromStorage = localStorage.getItem('theme') || 'alirio';
	// Normaliza para minúsculas para garantir correspondência com as chaves do objeto feedback
	const theme = themeFromStorage.toLowerCase() as ThemeOption;

	const userAnswer = option.content;

	const isCorrect = checkAnswer(userAnswer, correctAnswer);

	if (isCorrect) {
		gameMethods.playAudioHit();
		gameVariables.srcImg = gameSettings.hitImageSrc;

		if (gameVariables.lastPartialTime <= 500) {
			gameVariables.momentumCount++;
			gameVariables.score += 100;
		} else {
			gameVariables.momentumCount = 0;
		}

		if (gameVariables.momentumCount > 1) {
			gameVariables.message =
				gameVariables.momentumCount <= gameSettings.feedbackMomentumLength
					? feedback[theme].momentum[gameVariables.momentumCount - 2]
					: feedback[theme].momentum[gameSettings.feedbackMomentumLength - 1];
		} else {
			gameVariables.message =
				gameVariables.hitStreak < gameSettings.feedbackHitLength
					? feedback[theme].hitMessages[gameVariables.hitStreak]
					: feedback[theme].hitMessages[gameSettings.feedbackHitLength - 1];
		}

		gameVariables.hitStreak++;
		gameVariables.missStreak = 0;
		gameVariables.hits++;
		gameVariables.score += 50;
		gameVariables.transitioning = true;
	} else {
		gameMethods.playAudioMiss();
		gameVariables.srcImg = gameSettings.missImageSrc;

		if (gameVariables.lastPartialTime <= 500) {
			gameVariables.momentumCount++;
			gameVariables.score -= 100;
		} else {
			gameVariables.momentumCount = 0;
		}

		gameVariables.message =
			gameVariables.missStreak < gameSettings.feedbackMissLength
				? feedback[theme].missMessages[gameVariables.missStreak]
				: feedback[theme].missMessages[gameSettings.feedbackMissLength - 1];
		gameVariables.momentumCount = 0;
		gameVariables.hitStreak = 0;
		gameVariables.missStreak++;
		gameVariables.misses++;
		gameVariables.score -= 50;
		gameVariables.transitioning = true;
	}

	setTimeout(() => {
		gameVariables.transitioning = false;
		gameMethods.nextRound();
		gameMethods.runStep();
	}, 700);

	//setTimeout(() => runStep(), delay);
	//return { isCorrect, hasSubmitted, gameVariables, gameSettings };
}
