import type { CorrectAnswer } from '$lib/Tasks/Quests/types';
import { normalizeText } from '$lib/utils/text';

export default function checkAnswer(userAnswer: string, correctAnswer: CorrectAnswer) {
	const normalizedUserAnswer = normalizeText(userAnswer);
	//console.log('checkAnswer', userAnswer);
	const isCorrect = correctAnswer.some(
		(answer) => normalizeText(answer.content) === normalizedUserAnswer
	);
	// console.log(
	// 	'isCorrect',
	// 	normalizedUserAnswer,
	// 	correctAnswer.map((answer) => normalizeText(answer.content))[0],
	// 	userAnswer
	// );

	return isCorrect;
}
