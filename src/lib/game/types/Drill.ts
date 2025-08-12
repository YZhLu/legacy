import type { CorrectAnswer, Option, Body } from '$lib/Tasks/Quests/types';

export type Drill = {
	id: string;
	title: string;
	quantity: number;
	type: string;
	scope: string;
	correctAnswer: CorrectAnswer;
	body: Body;
	options: Option[];
}
