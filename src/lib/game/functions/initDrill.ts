import type { CorrectAnswer, Option } from '$lib/Tasks/Quests/types';
import { ExpressionParser } from '$lib/utils/parser';
import type { Drill } from '../types/Drill';

export default function initDrill(drill: Drill) {
	let body = [{ type: '', content: '' }],
		correctAnswer: CorrectAnswer = [],
		options: Option[] = [];

	const parser = new ExpressionParser(drill.scope);

	if (drill.options) {
		options = drill.options.map((o: Option) => {
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

	body = drill.body.map((b: { type: string; content: string }) => {
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

	correctAnswer = drill.correctAnswer.map((a: { type: string; content: string }) => {
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

	return { body, options, correctAnswer };
}
