import type { Section } from "$lib/types/Section";

export default {
	id: '60c91e7b-305a-4aa0-bf76-a105498da39b',
	title: 'Radiciação de radicais',
	quests: [
		{
			id: 'f0e88037-ba86-4da1-b8dc-7d77836bac8b',
			tips: ``,
			questType: 'MathInput',
			command: `Efetue e simplifique quando possível.`,
			quantity: 11,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|exp|]{x}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|a|]{\\sqrt{x}}' }],
					scope: `{
									\n"a": {"min":3,"max":12,"round":0,"notNull":true},
									\n"exp": "|a|*2 "
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|exp|]{|c|x}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|b|]{\\sqrt[|a|]{\\sqrt{|c|x}}}' }],
					scope: `{
									\n"a": {"min":3,"max":12,"round":0,"notNull":true, "type":"even"},
									\n"c": {"min":2,"max":12,"round":0,"notNull":true},
									\n"b": {"min":3,"max":12,"round":0,"notNull":true, "type":"odd"},
									\n"exp": "|b|*|a|*2 "
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|a|\\sqrt{x}'
						}
					],
					body: [{ type: 'latex', content: '{\\sqrt[|b|]{\\sqrt{x^{|exp|}}}}' }],
					scope: `{
									\n"b": {"min":2,"max":7,"round":0,"notNull":true},
									\n"a": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"exp": "(|a|*2 + 1)*|b| "
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
