import type { Section } from "$lib/types/Section";

export default {
	id: '856ea552-c621-4f74-a0b7-9d973ce2740b',
	title: 'Extração da raiz quadrada',
	quests: [
		{
			id: '3943e331-d7d7-43e3-acee-d9a54c719e18',
			tips: ``,
			questType: 'MathInput',
			command: `Obtenha os valores das raízes.`,
			quantity: 19,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|a|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|}' }],
					scope: `{
									\n"a": {"min":1,"max":9,"round":0,"notNull":true},
									\n"radicand": "|a|^2 "
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|res|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"exp1": {"min":1,"max":4,"round":0,"notNull":true, "type":"even"},
									\n"radicand": "|a|^|exp1|*|b|^2",
									\n"res": "|radicand|^(1/2)"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|res|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand|}' }],
					scope: `{
									\n"a": {"min":2,"max":10,"round":0,"notNull":true, "type":"even"},
									\n"radicand": "10^|a|",
									\n"res": "|radicand|^(1/2)"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '28537d0a-3107-4c7a-94bf-cd635a3c76c2',
			tips: ``,
			questType: 'MathInput',
			command: `Efetue.`,
			quantity: 6,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|fator|\\sqrt|base|'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'|a|\\sqrt{|base|} - ~|b|\\sqrt{|base|} + ~|c|\\sqrt{|base|} - ~|d|\\sqrt{|base|}'
						}
					],
					scope: `{
									\n"a": {"min":12,"max":20,"round":0,"notNull":true},
									\n"b": {"min":2,"max":10,"round":0,"notNull":true},
									\n"c": {"min":12,"max":20,"round":0,"notNull":true},
									\n"d": {"min":2,"max":10,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"rad2": "|b|^2*|base|",
									\n"rad4": "|d|^2*|base|",
									\n"fator": "|a|-|b|+|c|-|d|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|fator|\\sqrt|base|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|a|\\sqrt{|base|} - \\sqrt{|rad2|} + ~|c|\\sqrt{|base|} - \\sqrt{|rad4|}'
						}
					],
					scope: `{
									\n"a": {"min":12,"max":20,"round":0,"notNull":true},
									\n"b": {"min":2,"max":10,"round":0,"notNull":true},
									\n"c": {"min":12,"max":20,"round":0,"notNull":true},
									\n"d": {"min":2,"max":10,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"rad2": "|b|^2*|base|",
									\n"rad4": "|d|^2*|base|",
									\n"fator": "|a|-|b|+|c|-|d|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|d|\\sqrt{|fator|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{|a|} \\cdot \\sqrt{|b|} \\cdot \\sqrt{|c|} \\cdot \\sqrt{|rad4|}'
						}
					],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true,"type":"odd"},
									\n"c": {"min":11,"max":13,"round":0,"notNull":true,"type":"odd"},
									\n"d": {"min":2,"max":9,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"rad2": "|b|^2*|base|",
									\n"rad4": "|d|^2",
									\n"fator": "|a|*|b|*|c|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|b|^|c|\\cdot x^{|exp|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|a|]{|b|} \\cdot \\sqrt[|c|]{x^{|d|}}'
						}
					],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":2,"max":7,"round":0,"notNull":true,"type":"odd"},
									\n"c": {"min":4,"max":5,"round":0,"notNull":true},
									\n"d": {"min":5,"max":9,"round":0,"notNull":true},
									\n"base": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|a|*|c|",
									\n"exp": "|d|*|a|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt|a|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{x^{|fator|}} \\div \\sqrt{x^|b|} '
						}
					],
					scope: `{
									\n"a": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"b": {"min":2,"max":7,"round":0,"notNull":true},
									\n"fator": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{x}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|index_1|]{x^{|a|}} \\div \\sqrt[|index_2|]{x^{|c|}}'
						}
					],
					scope: `{
									\n"index_2": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"exp": {"min":1,"max":1,"round":0,"notNull":true},
									\n"index_1": {"min":3,"max":7,"round":0,"notNull":true, "type":"even"},
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"f": {"min":1,"max":3,"round":0,"notNull":true, "type":"even"},
									\n"index": "|index_1|*|index_2|",
									\n"exp_2":"|index_1|*|b|*|f|*|index_2|",
									\n"exp_1":"|exp|*|exp_2|",
									\n"a": "|exp_1|/|index_2|",
									\n"c": "|exp_2|/|index_1|"
									}`,
					// scope: `{
					// \n"exp": {"min":2,"max":7,"round":0,"notNull":true},
					// \n"a": {"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
					// \n"index_2": {"min":2,"max":3,"round":0,"notNull":true},
					// \n"index": "2",
					// \n"index_1": |index|/|index_2|,
					// \n"b": "|index|/|index_2|",
					// \n"fator": "|a|*|b|",
					// \n"exp_2": "|index|/|index_2|",
					// \n"exp_1": "|exp|*|exp_2|"
					// }`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '8a4759e2-afb3-498f-99c0-04e05106d0e4',
			tips: ``,
			questType: 'MathInput',
			command: `Racionalize.`,
			quantity: 7,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{|a|\\sqrt{x}}{x}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{|a|}{\\sqrt{x}}' }],
					scope: `{
									\n"a": {"min":50,"max":80,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt{xy}}{y}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{x}{\\sqrt{y}}' }],
					scope: `{}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt|b|-\\sqrt|a|}{|d|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{1}{\\sqrt{|b|} + \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt|b|+\\sqrt|a|}{|d|}'
						}
					],
					body: [{ type: 'latex', content: '\\frac{1}{\\sqrt{|b|} - \\sqrt{|a|}}' }],
					scope: `{
									\n"a": {"min":2,"max":3,"round":0,"notNull":true},
									\n"b": {"min":4,"max":7,"round":0,"notNull":true, "type": "odd"},
									\n"c": {"min":10,"max":24,"round":0,"notNull":true},
									\n"d": "|b| - |a|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
