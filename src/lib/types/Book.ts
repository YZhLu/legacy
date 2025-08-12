import type { Chapter } from './Chapter';

export type Book = {
	id: string;
	title: string;
	chapters: Chapter[];
	createdAt: string;
	updatedAt: string;
};
