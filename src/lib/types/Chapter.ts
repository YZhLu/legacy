import type { Section } from './Section';

export type Chapter = {
	id: string;
	title: string;
	sections: Section[];
	questsCount: number;
};
