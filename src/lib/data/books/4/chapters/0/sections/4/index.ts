import type { Section } from "$lib/types/Section";

export default {
	id: 'd9652d3d-08e2-44c0-8d56-1959e6851faf',
	title: 'Radicais semelhantes',
	quests: [
		{
			id: '3187691c-e1ee-4ff8-b903-1b0be5714f3a',
			tips: ``,
			questType: 'Boolean',
			command:
				'Analise as sentenças e indique S para radicais semelhantes e N para radicais não semelhantes.',
			quantity: 14,
			questData: [
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|a|\\cdot\\sqrt{|base|};~\\sqrt{|base|};~|b|\\cdot\\sqrt{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":2,"max":99,"round":0,"notNull":true},
									\n"b": {"min":2,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'|a|\\cdot\\sqrt[|index|]{|base|};~\\sqrt[|index|]{|base|};~|b|\\cdot\\sqrt[|index|]{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"index":{"min":3,"max":99,"round":0,"notNull":false},
									\n"a":{"min":2,"max":99,"round":0,"notNull":true},
									\n"b": {"min":2,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'b\\cdot\\sqrt{|base|};~-\\sqrt{|base|};~-a\\cdot\\sqrt{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'N'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{|base|};~\\sqrt[3]{|base|};~\\sqrt[4]{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'N'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{|base|};~\\sqrt[3]{|a|};~\\sqrt[3]{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":2,"max":99,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'N'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|b|]{|base|};~\\sqrt[|a|]{|base|};~\\sqrt[3]{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":3,"max":99,"round":0,"notNull":true},
									\n"b": {"min":3,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'|a|\\cdot\\sqrt[|b|]{a};~|b|\\cdot\\sqrt[|b|]{a};~|base|\\cdot\\sqrt[|b|]{a}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":3,"max":99,"round":0,"notNull":true},
									\n"b": {"min":3,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|a|\\cdot\\sqrt[|b|]{a};~|base|\\cdot\\sqrt[|b|]{a};~-b\\cdot\\sqrt[|b|]{a}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":2,"max":99,"round":0,"notNull":true},
									\n"b": {"min":3,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'N'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'a\\cdot\\sqrt[3]{|b|};~b\\cdot\\sqrt[|a|]{|base|};~c\\cdot\\sqrt[3]{|base|}'
						}
					],
					scope: `{\n"base":{"min":2,"max":99,"round":0,"notNull":false},
									\n"a":{"min":3,"max":99,"round":0,"notNull":true},
									\n"b": {"min":2,"max":99,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: 'S'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'a\\cdot\\sqrt[|base|]{c};~b\\cdot\\sqrt[|base|]{c};~-a\\cdot\\sqrt[|base|]{c}'
						}
					],
					scope: `{\n"base":{"min":3,"max":9,"round":0,"notNull":false}
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: 'S' },
						{ type: 'string', content: 'N' }
					]
				}
			],
			instructions: ``
		},
		{
			id: '5b19bd04-0cc0-4d88-b1b5-7b3c1f95f657',
			tips: ``,
			questType: 'MathInput',
			command: `Simplifique os radicais.`,
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x^|b|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{x^{|exp|}}' }],
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
							content: '|base|x^|index|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|x^{|exp|}}' }],
					scope: `{
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"exp": "|index|*2",
									\n"base": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'e^|base|x^|index|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{e^{|exp_2|}x^{|exp|}}' }],
					scope: `{
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"exp": "|index|*2",
									\n"base": {"min":2,"max":9,"round":0,"notNull":true},
									\n"exp_2": "|base|*2"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|base|}{y^{|exp_2|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[3]{\\frac{|radicand|}{y^{|index_2|}}}'
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
							content: '\\frac{|base|}{y^{|exp|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{\\frac{|num|}{y^{|den|}}}'
						}
					],
					scope: `{
										\n"exp": {"min":10,"max":99,"round":0,"notNull":true},
										\n"base": {"min":2,"max":15,"round":0,"notNull":true},
										\n"den": "|exp|*2",
										\n"num": "|base|^2"
										}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: 'dbde002f-ef1d-41e6-a798-02781260e10e',
			tips: ``,
			questType: 'MathInput',
			command: `Desenvolva as multiplicações, colocando os fatores nos radicais.`,
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|b^{|index|}x^|index_2|}'
						}
					],
					body: [{ type: 'latex', content: '|base|b\\cdot \\sqrt[|index|]{x^|index_2|}' }],
					scope: `{
									\n"index":{"min":3,"max":4,"round":0,"notNull":true},
									\n"index_2":"|index|-1",
									\n"base": {"min":2,"max":6,"round":0,"notNull":true},
									\n"radicand": "|base|^|index|"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|y^{|index_2|}x^|index|}'
						}
					],
					body: [{ type: 'latex', content: '|base|y^{|index|}\\cdot \\sqrt{x^|index|}' }],
					scope: `{
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"base": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|y^{|index_2|}x^|exp|}'
						}
					],
					body: [{ type: 'latex', content: '|base|y^{|index|}\\cdot \\sqrt{x^|exp|}' }],
					scope: `{
									\n"exp":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"base": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|base|x^{|index|}}'
						}
					],
					body: [{ type: 'latex', content: 'x\\cdot \\sqrt[|index|]{|base|}' }],
					scope: `{
									\n"index":{"min":10,"max":99,"round":0,"notNull":true},
									\n"base": {"min":2,"max":99,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '414f97de-16d9-458b-98ce-13f1d5698e01',
			tips: ``,
			questType: 'Match',
			command: 'Relacione os radicais semelhantes',
			quantity: 3,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt[5]{3}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[5]{3}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt[5]{3}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[5]{3}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt[5]{2}'
						},
						{
							type: 'latex',
							content: '3\\sqrt[5]{2}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt[5]{2}'
						},
						{
							type: 'latex',
							content: '3\\sqrt[5]{2}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt{5}'
						},
						{
							type: 'latex',
							content: '3\\sqrt{5}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '5\\sqrt[3]{2}'
						},
						{
							type: 'latex',
							content: '\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '5\\sqrt{3}'
						},
						{
							type: 'latex',
							content: '\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '2\\sqrt[3]{5}'
						},
						{
							type: 'latex',
							content: '\\sqrt{5}'
						},
						{
							type: 'latex',
							content: '3\\sqrt{5}'
						}
					]
				}
			],
			instructions:
				'Dois ou mais radicais são semelhantes quando têm o memso índice e o mesmo radicando.'
		},
		{
			id: '286b6022-fd58-4545-a700-5f3d59f214ef',
			tips: ``,
			questType: 'MathInput',
			command: `Reduza os radicais ao mesmo índice.`,
			quantity: 4,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index_2|]{a^{|index|}};\\sqrt[|index_2|]{a^{|exp_2|}}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{a}~;~\\sqrt[|index|]{a^{|exp|}}' }],
					scope: `{
									\n"index":{"min":10,"max":19,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"exp": {"min":5,"max":13,"round":0,"notNull":true},
									\n"exp_2": "|exp|*2"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\sqrt[|index_2|]{x^{|pow|}};\\sqrt[|index_2|]{|base|^{|pow_2|}};\\sqrt[|index_2|]{z^{|pow_3|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'\\sqrt{x^{|exp|}}~;~\\sqrt[3]{|base|^{|exp_2|}}~;~\\sqrt[|index|]{z^{|exp_3|}}'
						}
					],
					scope: `{
									\n"base": {"min":2,"max":9,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":5,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index_2":"|index|*6",
									\n"exp": {"min":2,"max":6,"round":0,"notNull":true},
									\n"exp_2": {"min":2,"max":6,"round":0,"notNull":true, "type":"odd"},
									\n"exp_3": {"min":2,"max":6,"round":0,"notNull":true},
									\n"pow":"|index|*3*|exp|",
									\n"pow_2":"|index|*2*|exp_2|",
									\n"pow_3":"6*|exp_3|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
