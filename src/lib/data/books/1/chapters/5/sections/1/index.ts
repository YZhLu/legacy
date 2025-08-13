import type { Section } from "$lib/types/Section";

export default {
	id: '5f45fd1a-5bb3-4610-9d1f-f648ddae7d72',
	title: 'Relação binária',
	quests: [
		{
			id: 'ce9deae6-13ef-42d0-b509-120374ff7c54',
			tips: ``,
			questType: 'Checkbox',
			command:
				'Dado o produto cartesiano A × B, assinale as alternativas que apresentam relações binárias de A em B.',
			quantity: 2,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\{~(|a3|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|a2|,|b3|); ~(|a1|,|b1|)~\\}'
						}
					],
					body: [
						{
							type: 'latex',
							content: `
										\\text{A x B = } \\{~(|a1|,|b1|); 
										~(|a1|,|b2|);~(|a1|,|b3|); 
										~(|a2|,|b1|); ~(|a2|,|b2|); 
										~(|a2|,|b3|); ~(|a3|,|b1|); 
										~(|a3|,|b2|); ~(|a3|,|b3|)~\\}`
						}
					],
					scope: `{
									\n"a1":{"min":1, "max":10, "round":0, "notNull":true},
									\n"a2":{"min":11, "max":19, "round":0, "notNull":true},
									\n"a3":{"min":-19, "max":-10, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":1, "max":5, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a3|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|a2|,|b3|); ~(|a1|,|b1|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a3|); ~(|a1|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|b2|); ~(|a1|,|b2|); ~(|a2|,|b1|)~\\}'
						}
					]
				}
			],
			instructions: ''
		},
		{
			id: 'e1dc782e-ab5f-4db4-a6b9-163918fbeb1d',
			tips: ``,
			questType: 'MathInput',
			command: 'Dadas todas as relações binárias de A em B = R',
			quantity: 2,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'A=\\left\\lbrace|a1|;|a2|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: `
										\\text{Sabendo que R = } \\{~(|a1|,|b1|); 
										~(|a1|,|b2|);~(|a1|,|b3|); 
										~(|a1|,|b4|); ~(|a2|,|b1|); 
										~(|a2|,|b2|); ~(|a2|,|b3|); 
										~(|a2|,|b4|)~\\}`
						},
						{
							type: 'string',
							content: `
										Apresente o conjunto A`
						}
					],
					scope: `{
									\n"a1":{"min":1, "max":10, "round":0, "notNull":true},
									\n"a2":{"min":11, "max":19, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":1, "max":5, "round":0, "notNull":true},
									\n"b4":{"min":-19, "max":-10, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: 'A=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'B=\\left\\lbrace|b1|;|b2|;|b3|;|b4|\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: `
										\\text{Sabendo que R = } \\{~(|a1|,|b1|); 
										~(|a1|,|b2|);~(|a1|,|b3|); 
										~(|a1|,|b4|); ~(|a2|,|b1|); 
										~(|a2|,|b2|); ~(|a2|,|b3|); 
										~(|a2|,|b4|)~\\}`
						},
						{
							type: 'string',
							content: `
										Apresente o conjunto B`
						}
					],
					scope: `{
									\n"a1":{"min":1, "max":10, "round":0, "notNull":true},
									\n"a2":{"min":11, "max":19, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":1, "max":5, "round":0, "notNull":true},
									\n"b4":{"min":-19, "max":-10, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: 'B=\\placeholder'
				}
			],
			instructions: ''
		}
	]
} as Section;
