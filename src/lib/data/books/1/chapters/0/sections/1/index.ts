import type { Section } from "$lib/types/Section";

export default {
	id: 'ecea35ab-9a4e-493e-9bed-c06a42a9481f',
	title: 'Simplificação de radicais',
	quests: [
		{
			id: '7f9e4d6b-1c2a-4b3d-8e5f-9a7b3c1d2e4f',  // Added UUID
			tips: ``,
			questType: 'MathInput',
			command: `Simplifique os radicais.`,
			quantity: 20,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt|base|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{|base|^{|fator|}}' }],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2"}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|a|]{|base|^|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{|base|^{|exp|}}' }],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":true},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"a":{"min":3,"max":6,"round":0,"notNull":true},
									\n"b": "|a|-1",
									\n"index": "|fator|*|a|",
									\n"exp": "|b|*(|fator|)"}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'b^|b|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{b^{|exp|}}' }],
					scope: `{\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"a":{"min":2,"max":6,"round":0,"notNull":true},
									\n"b": {"min":2,"max":6,"round":0,"notNull":true},
									\n"index": "|fator|*|a|",
									\n"exp": "|b|*(|index|)"}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|base|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|}' }],
					scope: `{
									\n"base": {"min":2,"max":9,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|base|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[3]{|radicand|}' }],
					scope: `{
									\n"base": {"min":2,"max":9,"round":0,"notNull":true},
									\n"radicand": "|base|^3"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|base|x'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{|radicand|x^|index|}' }],
					scope: `{
									\n"index":{"min":3,"max":4,"round":0,"notNull":true},
									\n"base": {"min":2,"max":5,"round":0,"notNull":true},
									\n"radicand": "|base|^|index|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|base|x^|fator|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[3]{|radicand|x^{|index|}}' }],
					scope: `{
									\n"fator": {"min":2,"max":7,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true},
									\n"index": "|fator|*3",
									\n"radicand": "|base|^3"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|num|\\sqrt|base|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|}' }],
					scope: `{\n"base":{"min":2,"max":5,"round":0,"notNull":false, "type":"odd"},
									\n"num":{"min":2,"max":9,"round":0,"notNull":true},
									\n"radicand":"|num|^2*|base|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|base|x^|fator|}{y^{|exp_2|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[3]{\\frac{|radicand|x^{|index|}}{y^{|index_2|}}}'
						}
					],
					scope: `{
										\n"fator": {"min":3,"max":7,"round":0,"notNull":true},
										\n"exp": {"min":4,"max":6,"round":0,"notNull":true},
										\n"base": {"min":3,"max":7,"round":0,"notNull":true},
										\n"index": "|fator|*3",
										\n"index_2": "|index|*|exp|",
										\n"exp_2": "|fator|*|exp|",
										\n"radicand": "|base|^3"
										}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|base|x}{y^|index|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{\\frac{|radicand|x^2}{y^{|exp_2|}}}' }],
					scope: `{
									\n"index": {"min":2,"max":7,"round":0,"notNull":true},
									\n"exp": {"min":4,"max":6,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true},
									\n"exp_2": "2*|index|",
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: 'b8a9c7d6-5e4f-3b2a-1c9d-8e7f6a5b4c3d',  // Added UUID
			tips: ``,
			questType: 'Boolean',
			command: 'Analise as sentenças e indique V para verdadeiro e F para falso.',
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'F'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|fator|]{|base|^{|index|}} = \\sqrt{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2 + 1"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'F'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[|fator|]{|base|^{|index|}} = \\sqrt[|fator|]{|base|^{|fator|} \\cdot|base|^{|fator|} \\cdot|base|} = |base|\\sqrt{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2 + 1"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'F'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[|fator|]{|base|^{|index|}} = \\sqrt[|fator|]{|base|^{|fator|} \\cdot|base|^{|fator|} \\cdot|base|} = |base|^{2}\\sqrt{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2 + 1"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'F'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[|fator|]{y^{|index|}} = \\sqrt[|fator|]{y^{|fator|} \\cdot y^{|fator|} \\cdot y} = 2y\\cdot \\sqrt[|fator|]{y}'
						}
					],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2 + 1"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'F'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[|fator|]{y^{|index|}} = \\sqrt[|fator|]{y^{|fator|}\\cdot y^{|fator|}} = 2 y'
						}
					],
					scope: `{
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'V'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|base|^{|exp|}} = \\sqrt[|a|]{|base|^|b|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":true},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"a":{"min":3,"max":6,"round":0,"notNull":true},
									\n"b": "|a|-1",
									\n"index": "|fator|*|a|",
									\n"exp": "|b|*(|fator|)"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},

				{
					correctAnswer: [
						{
							type: 'string',
							content: 'V'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[|index|]{y^{|exp|}} = \\sqrt[|index|]{y^{(|index|\\cdot|b|)}} = y^|b|'
						}
					],
					scope: `{\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"a":{"min":2,"max":6,"round":0,"notNull":true},
									\n"b": {"min":2,"max":6,"round":0,"notNull":true},
									\n"index": "|fator|*|a|",
									\n"exp": "|b|*(|index|)"}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},

				{
					correctAnswer: [
						{
							type: 'string',
							content: 'V'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt[3]{|radicand|x^{|index|}} = \\sqrt[3]{|base|^3x^{|index|}} = |base|x^|fator|'
						}
					],
					scope: `{
									\n"fator": {"min":2,"max":7,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true},
									\n"index": "|fator|*3",
									\n"radicand": "|base|^3"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'V'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|} = |num|\\sqrt{|base|}' }],
					scope: `{\n"base":{"min":2,"max":5,"round":0,"notNull":false, "type":"odd"},
									\n"num":{"min":2,"max":9,"round":0,"notNull":true},
									\n"radicand":"|num|^2*|base|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'V' },
						{ type: 'string', content: 'F' }
					]
				}
			],
			instructions: ``
		}
	]
} as Section;
