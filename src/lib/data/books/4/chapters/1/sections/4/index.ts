import type { Section } from "$lib/types/Section";

export default {
	id: '83030f0b-2f26-4833-b14e-3fb63b10a2bd',
	title: 'Racionalização de denominadores',
	quests: [
		{
			id: 'd8470846-b41d-419e-a213-ba856d2a504f',
			tips: ``,
			questType: 'MathInput',
			command: `Racionalize.`,
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a|\\sqrt{|b|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|a|}{\\sqrt{|b|}}' }],
					scope: `{
									\n"a": {"min":50,"max":80,"round":0,"notNull":true},
									\n"b": {"min":50,"max":80,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{\\sqrt{|a|}}{\\sqrt{|b|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{\\sqrt{|a|}}{\\sqrt{|b|}}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a|\\sqrt{|f|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{\\sqrt{|c|}}{\\sqrt{|b|}}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": "|a|^3",
									\n"f": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '71ed8805-7b07-4d55-a934-6e2b4b1793ee',
			tips: ``,
			questType: 'Match',
			command: 'Relacione a coluna da esquerda com a da direita',
			quantity: 3,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a1|}{\\sqrt{|b1|}}'
						},
						{
							type: 'latex',
							content: '\\frac{|a1|\\sqrt{|b1|}}{|b1|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a2|}}{\\sqrt{|b2|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f2|}}{|b2|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{|b3|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f3|}}{|b3|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|c4|}}{\\sqrt{|b4|}}'
						},
						{
							type: 'latex',
							content: '\\frac{|a4|\\sqrt{|f4|}}{|b4|}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: `{
									\n"a1": {"min":50,"max":80,"round":0,"notNull":true},
									\n"b1": {"min":50,"max":80,"round":0,"notNull":true},
									\n"a2": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b2": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f2": "|a2|*|b2|",
									\n"b3": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a3": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f3": "|a3|*|b3|",
									\n"b4": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a4": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c4": "|a4|^3",
									\n"f4": "|a4|*|b4|"
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\frac{|a1|}{\\sqrt{|b1|}}'
						},
						{
							type: 'latex',
							content: '\\frac{|a1|\\sqrt{|b1|}}{|b1|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a2|}}{\\sqrt{|b2|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f2|}}{|b2|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{|b3|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f3|}}{|b3|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|c4|}}{\\sqrt{|b4|}}'
						},
						{
							type: 'latex',
							content: '\\frac{|a4|\\sqrt{|f4|}}{|b4|}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a1|\\sqrt{|b1|}}{|b1|}'
						},
						{
							type: 'latex',
							content: '\\frac{|a1|}{\\sqrt{|b1|}}'
						},

						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f2|}}{|b2|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a2|}}{\\sqrt{|b2|}}'
						},

						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f3|}}{|b3|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{|b3|}}'
						},

						{
							type: 'latex',
							content: '\\frac{|a4|\\sqrt{|f4|}}{|b4|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|c4|}}{\\sqrt{|b4|}}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: `{
									\n"a1": {"min":50,"max":80,"round":0,"notNull":true},
									\n"b1": {"min":50,"max":80,"round":0,"notNull":true},
									\n"a2": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b2": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f2": "|a2|*|b2|",
									\n"b3": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a3": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"f3": "|a3|*|b3|",
									\n"b4": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a4": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c4": "|a4|^3",
									\n"f4": "|a4|*|b4|"
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\frac{|a1|\\sqrt{|b1|}}{|b1|}'
						},
						{
							type: 'latex',
							content: '\\frac{|a1|}{\\sqrt{|b1|}}'
						},

						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f2|}}{|b2|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a2|}}{\\sqrt{|b2|}}'
						},

						{
							type: 'latex',
							content: '\\frac{\\sqrt{|f3|}}{|b3|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{|b3|}}'
						},

						{
							type: 'latex',
							content: '\\frac{|a4|\\sqrt{|f4|}}{|b4|}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|c4|}}{\\sqrt{|b4|}}'
						}
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{a}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{a\\sqrt{b}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{ab}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{a}}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|b}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{a}}{\\sqrt{|b3|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|b3|a}}{|b3|}'
						}
					],
					body: [
						{
							type: '',
							content: ''
						}
					],
					scope: `{
									\n"b3": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a3": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"}
									}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'latex',
							content: '\\frac{a}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{a\\sqrt{b}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{ab}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{a}}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|b}}{b}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a3|}}{\\sqrt{b}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{a}}{\\sqrt{|b3|}}'
						},
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|b3|a}}{|b3|}'
						}
					]
				}
			],
			instructions: ''
		},
		{
			id: '1a13d18f-9184-43a1-88f7-a617705bc650',
			tips: ``,
			questType: 'MathInput',
			command: `Racionalize.`,
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a|\\sqrt[|n|]{|b|^|f|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|a|}{\\sqrt[|n|]{|b|^|p|}}' }],
					scope: `{
									\n"a": {"min":2,"max":99,"round":0,"notNull":true},
									\n"b": {"min":2,"max":99,"round":0,"notNull":true},
									\n"n": {"min":5,"max":9,"round":0,"notNull":true},
									\n"p": {"min":2,"max":3,"round":0,"notNull":true},
									\n"f": "|n|-|p|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a|\\sqrt[|n|]{x^|f|}}{x}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|a|}{\\sqrt[|n|]{x^|p|}}' }],
					scope: `{
									\n"a": {"min":2,"max":99,"round":0,"notNull":true},
									\n"n": {"min":5,"max":9,"round":0,"notNull":true},
									\n"p": {"min":2,"max":3,"round":0,"notNull":true},
									\n"f": "|n|-|p|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|a|}}{|b|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{\\sqrt{|a|}}{\\sqrt{|c|}}' }],
					scope: `{
									\n"a": {"min":50,"max":80,"round":0,"notNull":true},
									\n"b": {"min":2,"max":9,"round":0,"notNull":true},
									\n"c": "|b|^2"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '265f3309-3b09-4bdc-8bce-c06d38567ede',
			tips: ``,
			questType: 'MathInput',
			command: `Racionalize.`,
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|n|\\cdot\\left(\\sqrt|b|-\\sqrt|a|\\right)}{|d|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|n|}{\\sqrt{|b|} + \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|",
									\n"n": "|d|*|c| + 1"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|n|\\cdot\\left(\\sqrt|b|+\\sqrt|a|\\right)}{|d|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|n|}{\\sqrt{|b|} - \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|",
									\n"n": "|d|*|c| + 1"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|c|\\cdot\\left(\\sqrt|b|-\\sqrt|a|\\right)'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|n|}{\\sqrt{|b|} + \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|",
									\n"n": "|d|*|c|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|c|\\cdot\\left(\\sqrt|b|+\\sqrt|a|\\right)'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|n|}{\\sqrt{|b|} - \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|",
									\n"n": "|d|*|c|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|n2|\\sqrt2'
						}
					],
					// body: [
					// 	{
					// 		type: 'latex',
					// 		content: `\\frac{|n|}{\\sqrt{|base|} + \\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^|b|} + \\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^{|f|}\\cdot ~2} + \\sqrt{2}} =
					// 				\\frac{|n|}{2^|r|\\sqrt{2} + \\sqrt{2}} =
					// 				\\frac{|n|}{|s|\\sqrt{2} + \\sqrt{2}} =
					// 				\\frac{|n|}{|t|\\sqrt{2}} =
					// 				\\frac{|c|}{\\sqrt{2}} =
					// 				\\frac{|c|\\sqrt{2}}{2} =
					// 				|n2|\\sqrt{2}`
					// 	}
					// ],
					body: [
						{
							type: 'latex',
							content: `\\frac{|n|}{\\sqrt{|base|} + \\sqrt{2}}`
						}
					],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":9,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true, "type": "even"},
									\n"d": "|b| - |a|",
									\n"f": "|b| - 1",
									\n"r": "|f|/2",
									\n"s": "2^|r|",
									\n"t": "|s| + 1",
									\n"base": "2^|b|",
									\n"n": "|t|*|c|",
									\n"n2": "|c|/2"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|n2|\\sqrt2'
						}
					],
					body: [
						{
							type: 'latex',
							content: `\\frac{|n|}{\\sqrt{|base|} + ~|a|\\sqrt{2}}`
						}
					],
					// body: [
					// 	{
					// 		type: 'latex',
					// 		content: `\\frac{|n|}{\\sqrt{|base|} + ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^|b|} + ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^{|f|}\\cdot ~2} + ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{2^{|r|}\\sqrt{2} + ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{|s|\\sqrt{2} + ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{|t|\\sqrt{2}} =
					// 				\\frac{|c|}{\\sqrt{2}} =
					// 				\\frac{|c|\\sqrt{2}}{2} =
					// 				|n2|\\sqrt{2}`
					// 	}
					// ],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":9,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true, "type": "even"},
									\n"f": "|b| - 1",
									\n"r": "|f|/2",
									\n"s": "2^|r|",
									\n"t": "|s| + |a|",
									\n"base": "2^|b|",
									\n"n": "|t|*|c|",
									\n"n2": "|c|/2"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|n2|\\sqrt2'
						}
					],
					body: [
						{
							type: 'latex',
							content: `\\frac{|n|}{\\sqrt{|base|} - ~|a|\\sqrt{2}}`
						}
					],
					// body: [
					// 	{
					// 		type: 'latex',
					// 		content: `\\frac{|n|}{\\sqrt{|base|} - ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^|b|} - ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{\\sqrt{2^{|f|}\\cdot ~2} - ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{2^{|r|}\\sqrt{2} - ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{|s|\\sqrt{2} - ~|a|\\sqrt{2}} =
					// 				\\frac{|n|}{|t|\\sqrt{2}} =
					// 				\\frac{|c|}{\\sqrt{2}} =
					// 				\\frac{|c|\\sqrt{2}}{2} =
					// 				|n2|\\sqrt{2}`
					// 	}
					// ],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":9,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true, "type": "even"},
									\n"f": "|b| - 1",
									\n"r": "|f|/2",
									\n"s": "2^|r|",
									\n"t": "|s| - |a|",
									\n"base": "2^|b|",
									\n"n": "|t|*|c|",
									\n"n2": "|c|/2"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
