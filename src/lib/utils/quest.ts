/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Body, CorrectAnswer, Option } from '$lib/Tasks/Quests/types';
import { ExpressionParser } from './parser';
import { math } from 'mathlifier';

export function findQuest(questData: any, targetQuestId: string): any | null {
	function searchQuests(node: any): any | null {
		// Base case: if node is null or not an object
		if (!node || typeof node !== 'object') return null;

		// If node is an array, search through each element
		if (Array.isArray(node)) {
			for (const item of node) {
				const result = searchQuests(item);
				if (result) return result;
			}
			return null;
		}

		// Check if current node is a quest with matching id
		if (node.id === targetQuestId && 'questData' in node) {
			return node;
		}

		// Recursively search through all object properties
		for (const key in node) {
			const result = searchQuests(node[key]);
			if (result) return result;
		}

		return null;
	}

	return searchQuests(questData);
}

export function msToMinutes(ms: number): string {
	const minutes = Math.floor(ms / 60000);
	const seconds = ((ms % 60000) / 1000).toFixed(0);
	return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
}

export function initQuest(questData: any): {
	body: Body;
	options: Option[];
	correctAnswer: CorrectAnswer;
	userAnswerPlaceholder: string;
} {
	let body = [{ type: '', content: '' }],
		correctAnswer: CorrectAnswer = [],
		options: Option[] = [],
		userAnswerPlaceholder = '';
	const rd = Math.floor(Math.random() * questData.length);
	const parser = new ExpressionParser(questData[rd].scope);

	if (questData[rd].options) {
		options = questData[rd].options.map((o: any) => {
			let content: string = '';

			if (o.type === 'latex') {
				content = parser.parse(o.content);
			} else if (o.type === 'string') {
				content = o.content;
			} else if (o.type === 'img') {
				content = o.content;
			}

			const option = {
				type: o.type,
				content
			};

			return option;
		});
	}

	body = questData[rd].body.map((b: any) => {
		let content: string = '';
		if (b.type === 'latex') {
			content = parser.parse(b.content);
		} else if (b.type === 'string') {
			content = b.content;
		} else if (b.type === 'img') {
			content = b.content;
		}
		const body = {
			type: b.type,
			content
		};
		return body;
	});
	
	// if (questData[rd].body.type === 'latex') {
	// 	body.type = questData[rd].body.type;
	// 	body.content = parser.parse(questData[rd].body.content);
	// } else if (questData[rd].body.type === 'string') {
	// 	body = questData[rd].body.content;
	// } else if (questData[rd].body.type === 'img') {
	// 	body = questData[rd].body.content;
	// }

	correctAnswer = questData[rd].correctAnswer.map((a: any) => {
		let content: string = '';

		if (a.type === 'latex') {
			content = parser.parse(a.content);
		} else if (a.type === 'string') {
			content = a.content;
		} else if (a.type === 'img') {
			content = a.content;
		}

		const ans = {
			type: a.type,
			content
		};

		return ans;
	});

	if (questData[rd].userAnswerPlaceholder) {
		userAnswerPlaceholder = parser.parse(questData[rd].userAnswerPlaceholder);
	}

	// if (questData[rd].correctAnswer.type === 'latex') {
	// 	correctAnswer = questData[rd].correctAnswer.map((a: any) => {
	// 		const option = {
	// 			type: a.type,
	// 			content: parser.parse(a.content)
	// 		};
	// 		return option;
	// 	});
	// } else if (questData[rd].correctAnswer.type === 'string') {
	// 	correctAnswer = questData[rd].correctAnswer;
	// }

	return { body, options, correctAnswer, userAnswerPlaceholder };
}

export function transformarString(input: string): string[] {
	// Substitui quebras de linha e tabs por espaços e normaliza os espaços
	// const cleaned = input.replace(/\n|\t/g, ' ').replace(/\s+/g, ' ').trim();
  
	const parts = input.split('$$').map((str, index) => {
		// Se o índice for ímpar, significa que é conteúdo entre $$
		if (index % 2 !== 0) {
			return math(str.trim());
		}
		return str.trim();
	});
  
	return parts;
}

export function parseInstructions(instructions: string): string {
	// const parser = new ExpressionParser('{}');
	const userAnswerPlaceholder = transformarString(instructions);
	return userAnswerPlaceholder.join('&nbsp');
}
