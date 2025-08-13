import type { Section } from "$lib/types/Section";

export default {
	id: 'ce515ef5-6d60-4bd1-9094-53310a152278',
	title: 'Potenciação de radicais',
	quests: [
		{
			id: 'f617dbe9-1526-4240-87be-b56f498ad273',
			tips: ``,
			questType: 'MathInput',
			command: `Efetue e simplifique quando possível.`,
			quantity: 11,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x^|exp|'
						}
					],
					body: [{ type: 'latex', content: '(\\sqrt{x})^{|a|}' }],
					scope: `{
									\n"a": {"min":3,"max":12,"round":0,"notNull":true, "type":"even"},
									\n"exp": "|a|/2 "
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x^|exp|\\sqrt{x}'
						}
					],
					body: [{ type: 'latex', content: '(\\sqrt{x})^{|a|}' }],
					scope: `{
									\n"a": {"min":4,"max":13,"round":0,"notNull":true, "type":"odd"},
									\n"exp": "(|a|-1)/2 "
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|a|]{|radicand|}'
						}
					],
					body: [{ type: 'latex', content: '(\\sqrt[|a|]{2})^{|exp|}' }],
					scope: `{
									\n"a": {"min":3,"max":13,"round":0,"notNull":true},
									\n"exp": "(|a|-1)",
									\n"radicand": "(2^|exp|)"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|b|x'
						}
					],
					body: [{ type: 'latex', content: '(\\sqrt[|a|]{|b|x})^{|a|}' }],
					scope: `{
									\n"a": {"min":3,"max":99,"round":0,"notNull":true},
									\n"b": {"min":2,"max":99,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x^{|exp|}'
						}
					],
					body: [{ type: 'latex', content: '(\\sqrt{x^{|b|}})^{|a|}' }],
					scope: `{
									\n"a": {"min":9,"max":99,"round":0,"notNull":true, "type":"even"},
									\n"b": {"min":2,"max":9,"round":0,"notNull":true},
									\n"exp": "(|a|*|b|)/2"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
