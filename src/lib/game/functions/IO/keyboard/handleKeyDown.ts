import type { GameMethods } from '$lib/game/types/GameMethods';
import type { CorrectAnswer, Option } from '$lib/Tasks/Quests/types';
import type { GameSettings } from '../../../types/GameSettings';
import type { GameVariables } from '../../../types/GameVariables';

export default function handleKeyDown(
	event: KeyboardEvent,
	options: Option[],
	handleOptionClick: (
		correctAnswer: CorrectAnswer,
		option: Option,
		gameVariables: GameVariables,
		gameMethods: GameMethods,
		gameSettings: GameSettings
	) => void,
	correctAnswer: CorrectAnswer,
	gameVariables: GameVariables,
	gameMethods: GameMethods,
	gameSettings: GameSettings,
	key1: string = 'a',
	key2: string = 's',
	key3: string = 'd'
) {
	if (event.key === key1 || event.key === key2 || event.key === key3) {
		const index = event.key === key1 ? 0 : event.key === key2 ? 1 : 2;
		handleOptionClick(correctAnswer, options[index], gameVariables, gameMethods, gameSettings);
	}
}
