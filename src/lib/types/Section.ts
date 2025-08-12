import type { Quest } from '$lib/Tasks/Quests/types';

export type Section = {
	id: string;
	title: string;
	quests: Quest[];
};
