import type { Section } from "$lib/types/Section";

export default {
	id: 'ab5027e3-6bd1-494c-bc20-53e2fe620c56',
	title: 'Produto cartesiano',
	quests: [
		{
			id: 'fd5db1dd-8e1b-4e0b-aaca-f4a524176ca3',
			tips: ``,
			questType: 'Checkbox',
			command: 'Assinale as alternativas que apresentam as respostas do que se pede.',
			quantity: 6,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue A X B' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue B X A' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue A X C' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue B X C' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue C X A' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					],
					body: [
						{ type: 'string', content: 'Sendo:' },
						{ type: 'latex', content: 'A = \\{~|a1|, ~|a2|~\\}' },
						{ type: 'latex', content: 'B = \\{~|b1|, ~|b2|~\\}' },
						{ type: 'latex', content: 'C = \\{~|c1|, ~|c2|~, ~|c3|~\\},' },
						{ type: 'string', content: 'efetue C X B' }
					],
					scope: `{
									\n"a1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"a2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"c3":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a2|,|b1|); ~(|a2|,|b2|)~\\}'
						},
						{
							type: 'latex',
							content: '\\{~(|b1|,|a1|); ~(|b1|,|a2|); ~(|b2|,|a1|); ~(|b2|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|a1|,|c1|); ~(|a1|,|c2|); ~(|a1|,|c3|); ~(|a2|,|c1|); ~(|a2|,|c2|); ~(|a2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|b1|,|c1|); ~(|b1|,|c2|); ~(|b1|,|c3|); ~(|b2|,|c1|); ~(|b2|,|c2|); ~(|b2|,|c3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|a1|); ~(|c1|,|a2|); ~(|c2|,|a1|); ~(|c2|,|a2|); ~(|c3|,|a1|); ~(|c3|,|a2|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\{~(|c1|,|b1|); ~(|c1|,|b2|); ~(|c2|,|b1|); ~(|c2|,|b2|); ~(|c3|,|b1|); ~(|c3|,|b2|)~\\}'
						}
					]
				}
			],
			instructions: ''
		},
		{
			id: 'b092a531-9912-473e-bdfb-ffd3d57393ac',
			tips: ``,
			questType: 'MathInput',
			command: 'Assinale as alternativas que apresentam as respostas do que se pede.',
			quantity: 4,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|a1|\\right\\rbrace'
						}
					],
					body: [
						{ type: 'string', content: 'Dados:' },
						{
							type: 'latex',
							content: '\\text{A X B = } \\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a1|,|b3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\text{C X D = } \\{~(|c1|,|d1|); ~(|c1|,|d2|); ~(|c2|,|d1|); ~(|c2|,|d2|)~\\}'
						},
						{ type: 'string', content: 'determine o conjunto A' }
					],
					scope: `{
									\n"a1":{"min":-9, "max":9, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":1, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":-9, "max":-6, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d1":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d2":{"min":6, "max":9, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: 'S=\\left\\lbrace\\placeholder|\\right\\rbrace'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|b1|,|b2|,|b3|\\right\\rbrace'
						}
					],
					body: [
						{ type: 'string', content: 'Dados:' },
						{
							type: 'latex',
							content: '\\text{A X B = } \\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a1|,|b3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\text{C X D = } \\{~(|c1|,|d1|); ~(|c1|,|d2|); ~(|c2|,|d1|); ~(|c2|,|d2|)~\\}'
						},
						{ type: 'string', content: 'determine o conjunto B' }
					],
					scope: `{
									\n"a1":{"min":-10, "max":10, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":-9, "max":-1, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d1":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d2":{"min":6, "max":9, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder:
						'S=\\left\\lbrace\\placeholder|,\\placeholder|,\\placeholder|\\right\\rbrace'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|c1|,|c2|\\right\\rbrace'
						}
					],
					body: [
						{ type: 'string', content: 'Dados:' },
						{
							type: 'latex',
							content: '\\text{A X B = } \\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a1|,|b3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\text{C X D = } \\{~(|c1|,|d1|); ~(|c1|,|d2|); ~(|c2|,|d1|); ~(|c2|,|d2|)~\\}'
						},
						{ type: 'string', content: 'determine o conjunto C' }
					],
					scope: `{
									\n"a1":{"min":-10, "max":10, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":-9, "max":-1, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d1":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d2":{"min":-4, "max":4, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: 'S=\\left\\lbrace\\placeholder|,\\placeholder|\\right\\rbrace'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|d1|,|d2|\\right\\rbrace'
						}
					],
					body: [
						{ type: 'string', content: 'Dados:' },
						{
							type: 'latex',
							content: '\\text{A X B = } \\{~(|a1|,|b1|); ~(|a1|,|b2|); ~(|a1|,|b3|)~\\}'
						},
						{
							type: 'latex',
							content:
								'\\text{C X D = } \\{~(|c1|,|d1|); ~(|c1|,|d2|); ~(|c2|,|d1|); ~(|c2|,|d2|)~\\}'
						},
						{ type: 'string', content: 'determine o conjunto D' }
					],
					scope: `{
									\n"a1":{"min":-10, "max":10, "round":0, "notNull":true},
									\n"b1":{"min":-5, "max":-1, "round":0, "notNull":true},
									\n"b2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"b3":{"min":-9, "max":-1, "round":0, "notNull":true},
									\n"c1":{"min":1, "max":5, "round":0, "notNull":true},
									\n"c2":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d1":{"min":6, "max":9, "round":0, "notNull":true},
									\n"d2":{"min":-9, "max":-1, "round":0, "notNull":true}
									}`,
					userAnswerPlaceholder: 'S=\\left\\lbrace\\placeholder|,\\placeholder|\\right\\rbrace'
				}
			],
			instructions: ''
		}
	]
} as Section;
