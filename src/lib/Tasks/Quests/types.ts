export type Body = {
	type: string;
	content: string;
}[];

export type CorrectAnswer = {
	type: string;
	content: string;
}[];

export type Option = {
	type: string;
	content: string;
};

export type GraphTableRow = {
	x: number;
	y: number;
	xy?: string;
};

export type QuestData = {
	correctAnswer: CorrectAnswer;
	body: Body;
	scope: string;
	userAnswerPlaceholder?: string;
	options?: Option[];
	matchOptions?: { left: string[]; right: string[] };
};

export type Quest = {
	id: string;
	tips: string;
	questType: string;
	command: string;
	quantity: number;
	questData: QuestData[];
	instructions: string;
};
