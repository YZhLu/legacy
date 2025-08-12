import type { Section } from "$lib/types/Section";

export default {
	id: '3cda5793-6131-463f-81d1-0f5ee931801c',
	title: 'Equações irracionais',
	quests: [
		{
			id: '9fabab54-0919-4e51-8d67-5420a4ef0119',
			tips: ``,
			questType: 'MathInput',
			command: 'Resolva as equações irracionais em R.',
			quantity: 9,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|x|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{x} = |a|'
						}
					],
					scope: `{
									\n"a":{"min":1, "max":10, "round":0, "notNull":true},
									\n"x":"|a|^2"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|x|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|a|]{x} = 2'
						}
					],
					scope: `{
									\n"a":{"min":2, "max":10, "round":0, "notNull":true},
									\n"x":"2^|a|"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|c|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|a|]{x |b|} = 2'
						}
					],
					scope: `{
									\n"a":{"min":2, "max":12, "round":0, "notNull":true},
									\n"b":{"min":-16, "max":16, "round":0, "notNull":true},
									\n"x":"2^|a|",
									\n"c":"|x| - |b|"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|x|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{x |a|} = x |a_prime|'
						}
					],
					scope: `{
									\n"n":{"min":1, "max":10, "round":0, "notNull":true},
									\n"a":"|n|*(|n|+1)/2",
									\n"a_prime":"-|a|",
									\n"x":"(|n|+1)*(|n|+2)/2"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `
                        `
		}
	]
} as Section;
