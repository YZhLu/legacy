import type { Section } from "$lib/types/Section";


export default {
	id: 'eed24b37-a9f0-4f5b-aae9-5c05a9fb180c',
	title: 'Raiz enésima de um número real',
	quests: [
		{
			id: '04439baf-a054-4043-af44-239176d56c58',
			tips: `$\\sqrt{16} \\leftrightarrow 4^2 = 16$
                        \\
                        \\
                         A raiz quadrada de 16 é igual a 4;
                        \\
                        o que
                        equivale a 4 elevado ao quadrado ser 
                        igual a 16.`,
			questType: 'MathInput',
			command: 'Complete as seguintes equivalências:',
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|} = |base| \\leftrightarrow |base|^2 = |radicand|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{A raiz quadrada de ~|radicand| é igual a ~|base|.}'
						},
						{
							type: 'latex',
							content: '\\text{O que equivale a ~|base| elevado ao quadrado}'
						},
						{
							type: 'latex',
							content: '\\text{ ser igual a ~|radicand|}.'
						}
					],
					scope: '{\n"base":{"min":10,"max":100,"round":0,"notNull":true},\n"radicand":"|base|^2"}',

					userAnswerPlaceholder:
						'\\sqrt{\\placeholder{}} = \\placeholder{} \\leftrightarrow \\placeholder{}^{\\placeholder{}} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[10]{|radicand|} = |base| \\leftrightarrow |base|^{10} = |radicand|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{A raiz décima de ~|radicand| é igual a ~|base|.}'
						},
						{
							type: 'latex',
							content: '\\text{O que equivale a ~|base| elevado décima potência}'
						},
						{
							type: 'latex',
							content: '\\text{ ser igual a ~|radicand|}.'
						}
					],
					scope: '{\n"base":{"min":1,"max":12,"round":0,"notNull":true},\n"radicand":"|base|^10"}',
					userAnswerPlaceholder:
						'\\sqrt[10]{|radicand|} = \\placeholder{} \\leftrightarrow \\placeholder{}^{\\placeholder{}} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[4]{|radicand|} = |base|\\leftrightarrow |base|^4 = |radicand|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{A raiz quarta de ~|radicand| é igual a ~|base|.}'
						},
						{
							type: 'latex',
							content: '\\text{O que equivale a ~|base| elevado quarta potência}'
						},
						{
							type: 'latex',
							content: '\\text{ ser igual a ~|radicand|}.'
						}
					],
					scope: '{\n"base":{"min":1,"max":12,"round":0,"notNull":true},\n"radicand":"|base|^4"}',
					userAnswerPlaceholder:
						'\\sqrt[\\placeholder{}]{\\placeholder{}} = \\placeholder{} \\leftrightarrow \\placeholder{}^{\\placeholder{}} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[5]{|radicand|} = |base| \\leftrightarrow |base|^5 = |radicand|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{A raiz quinta de |radicand| é igual a |base|.}'
						},
						{
							type: 'latex',
							content: '\\text{O que equivale a |base| elevado quinta potência}'
						},
						{
							type: 'latex',
							content: '\\text{ ser igual a |radicand|}.'
						}
					],
					scope: '{\n"base":{"min":-5,"max":-1,"round":0,"notNull":true},\n"radicand":"|base|^5"}',
					userAnswerPlaceholder:
						'\\sqrt[\\placeholder{}]{\\placeholder{}} = \\placeholder{} \\leftrightarrow \\placeholder{}^{\\placeholder{}} = \\placeholder{}'
				}
			],
			instructions: `
                        Sendo <strong>a</strong> e <strong>b</strong> números reais e <strong>n</strong> natural e diferente de zero, 
                        define-se:<br/> <sup>n</sup>√a = b &harr; b<sup>n</sup> = a
                        `
		},
		{
			id: 'fbd51ec5-d9b9-4f6d-b10d-3a399400a546',
			tips: ``,
			questType: 'MathInput',
			command: 'Dê o índice, o radical, o radicando e a raiz em cada item.',
			quantity: 6,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'índice:2;radical:\\sqrt{|radicand|};radicando:|radicand|;raiz:|base|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|} = |base|'
						}
					],
					scope: '{\n"base":{"min":10,"max":100,"round":0,"notNull":true},\n"radicand":"|base|^2"}',

					userAnswerPlaceholder:
						'índice:\\placeholder{};radical:\\placeholder{};radicando:\\placeholder{};raiz:\\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'índice:|index|;radical:\\sqrt[|index|]{|radicand|};radicando:|radicand|;raiz:|base|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|} = |base|'
						}
					],
					scope:
						'{\n"base":{"min":1,"max":5,"round":0,"notNull":true},\n"index":{"min":3,"max":5,"round":0,"notNull":true},\n"radicand":"|base|^|index|"}',

					userAnswerPlaceholder:
						'índice:\\placeholder{};radical:\\placeholder{};radicando:\\placeholder{};raiz:\\placeholder{}'
				}
			],
			instructions: ``
		},
		{
			id: '879864dc-c45d-4227-9585-954df70ebac5',
			tips: ``,
			questType: 'MathInput',
			command: 'Complete as equivalências.',
			quantity: 8,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[3]{|radicand|} = |base| \\leftrightarrow |base|^3 = |radicand|'
						}
					],
					body: [],
					scope:
						'{\n"base":{"min":-12,"max":12,"round":0,"notNull":false},\n"radicand":"|base|^3"}',
					userAnswerPlaceholder:
						'\\sqrt[3]{|radicand|} = |base| \\leftrightarrow |base|^3 = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|} = |base| \\leftrightarrow |base|^2 = |radicand|'
						}
					],
					body: [],
					scope: '{\n"base":{"min":0,"max":12,"round":0,"notNull":true},\n"radicand":"|base|^2"}',
					userAnswerPlaceholder:
						'\\sqrt{|radicand|} = |base| \\leftrightarrow \\placeholder{} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|} = |base| \\leftrightarrow |base|^2 = |radicand|'
						}
					],
					body: [],
					scope: '{\n"base":{"min":0,"max":12,"round":0,"notNull":true},\n"radicand":"|base|^2"}',
					userAnswerPlaceholder:
						'\\sqrt{|radicand|} = \\placeholder{} \\leftrightarrow \\placeholder{} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[3]{|radicand|} = |base| \\leftrightarrow |base|^3 = |radicand|'
						}
					],
					body: [],
					scope: '{\n"base":{"min":-12,"max":2,"round":0,"notNull":false},\n"radicand":"|base|^3"}',
					userAnswerPlaceholder:
						'\\sqrt[3]{|radicand|} = |base| \\leftrightarrow \\placeholder{} = \\placeholder{}'
				}
			],
			instructions: ``
		},
		{
			id: 'cb8a7583-4ebd-4605-9110-411fb6ac8977',
			tips: ``,
			questType: 'Boolean',
			command:
				'Indique se a expressão abaixo ∈ (pertence) ou ∉ (não pertence) ao conjunto dos números Reais.',
			quantity: 10,
			questData: [
				{
					correctAnswer: [
						{
							type: 'string',
							content: '∈'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|}'
						}
					],
					scope:
						'{\n"radicand":{"min":-7, "max":3, "round":0, "notNull":true},\n"index":{"min":4, "max":10, "round":0, "notNull":true, "type":"odd"}}',
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '∈' },
						{ type: 'string', content: '∉' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: '∉'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|}'
						}
					],
					scope:
						'{\n"radicand":{"min":-10, "max":-3, "round":0, "notNull":true},\n"index":{"min":4, "max":10, "round":0, "notNull":true, "type":"even"}}',
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '∈' },
						{ type: 'string', content: '∉' }
					]
				}
			],
			instructions: ``
		},
		{
			id: 'e9c3ea15-f05c-471b-bd91-2ac1b993dadd',
			tips: ``,
			questType: 'MathInput',
			command: 'Complete as sentenças',
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|base|^{|index|}} = |base|'
						}
					],
					body: [],
					scope:
						'{\n"base":{"min":0,"max":99,"round":0,"notNull":false},\n"index":{"min":3,"max":99,"round":0,"notNull":true}}',
					userAnswerPlaceholder: '\\sqrt[|index|]{|base|^{|index|}} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|base|^2} = |base|'
						}
					],
					body: [],
					scope: '{\n"base":{"min":0,"max":9,"round":0,"notNull":false}}',
					userAnswerPlaceholder: '\\sqrt{|base|^2} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{a^{|index|}} = a'
						}
					],
					body: [],
					scope: '{\n"index":{"min":3,"max":20,"round":0,"notNull":true}}',
					userAnswerPlaceholder: '\\sqrt[|index|]{a^{|index|}} = \\placeholder{}'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '{\\sqrt{|base|}^2 = |base|}'
						}
					],
					body: [],
					scope: '{\n"base":{"min":0,"max":9,"round":0,"notNull":false}}',
					userAnswerPlaceholder: '{\\sqrt{|base|}^\\placeholder} = |base|'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '{\\sqrt[|index|]{(|base|a)}^{|index|} = |base|a}'
						}
					],
					body: [],
					scope:
						'{\n"base":{"min":1,"max":9,"round":0,"notNull":false},\n"index":{"min":10,"max":99,"round":0,"notNull":false}}',
					userAnswerPlaceholder: '{\\sqrt[|index|]{(|base|a)}^{\\placeholder}} = |base|a'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '{\\sqrt[|index|]{(|base|b)^{|index|}} = |base|b}'
						}
					],
					body: [],
					scope:
						'{\n"base":{"min":1,"max":9,"round":0,"notNull":false},\n"index":{"min":10,"max":99,"round":0,"notNull":false}}',
					userAnswerPlaceholder: '{\\sqrt[|index|]{(|base|b)^{\\placeholder}}} = |base|b'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '{\\sqrt[p]{\\left(|base|b\\right)^{p}} = |base|b}'
						}
					],
					body: [],
					scope:
						'{\n"base":{"min":2,"max":9,"round":0,"notNull":false},\n"index":{"min":10,"max":99,"round":0,"notNull":false}}',
					userAnswerPlaceholder: '{\\sqrt[p]{\\placeholder}} = |base|b'
				}
			],
			instructions: ``
		},
		{
			id: 'daf905c9-de10-47e7-af72-45e8a732436e',
			tips: ``,
			questType: 'MathInput',
			command: `Divida o índice e o 
						expoente pelo mdc (máximo divisor comum) 
						entre eles para estes radicais.`,
			quantity: 10,
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
							content: '\\sqrt{|base|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{|base|^{|fator|}}' }],
					scope: `{\n"base":{"min":11,"max":99,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2"}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|base|^|fator|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|base|^{|index|}}' }],
					scope: `{\n"base":{"min":2,"max":9,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*2"}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|neo|]{b}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{b^{|fator|}}' }],
					scope: `{\n"base":{"min":11,"max":99,"round":0,"notNull":false},
									\n"fator":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"neo":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": "|fator|*|neo|"}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: 'bc794448-0100-4686-94b4-a56fa84eb830',
			tips: ``,
			questType: 'MathInput',
			command: 'Observe o exemplo e complete.',
			quantity: 7,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|base_1|}\\cdot\\sqrt|base_2|\\cdot\\sqrt{|base_3|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[5]{2\\cdot b} = \\sqrt[5]{2}\\cdot\\sqrt[5]{b}'
						},
						{ type: 'latex', content: '\\sqrt{|base_1|\\cdot|base_2|\\cdot|base_3|}' }
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_2":{"min":2,"max":9,"round":0,"notNull":false},
									\n"base_3":{"min":10,"max":19,"round":0,"notNull":false}}
									`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\sqrt[|index|]{|base_1|}\\cdot\\sqrt[|index|]{b}\\cdot\\sqrt[|index|]{|base_3|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[5]{2\\cdot b} = \\sqrt[5]{2}\\cdot\\sqrt[5]{b}'
						},
						{ type: 'latex', content: '\\sqrt[|index|]{|base_1|\\cdot b\\cdot|base_3|}' }
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_3":{"min":10,"max":19,"round":0,"notNull":false},
									\n"index":{"min":3,"max":99,"round":0,"notNull":true}}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\sqrt[|index|]{a^{|base_1|}}\\cdot\\sqrt[|index|]{b^|base_2|}\\cdot\\sqrt[|index|]{c^{|base_3|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt[5]{2\\cdot b} = \\sqrt[5]{2}\\cdot\\sqrt[5]{b}'
						},
						{
							type: 'latex',
							content: '\\sqrt[|index|]{a^{|base_1|}\\cdot b^|base_2|\\cdot c^{|base_3|}}'
						}
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_2":{"min":2,"max":9,"round":0,"notNull":false},
									\n"base_3":{"min":10,"max":19,"round":0,"notNull":false},
									\n"index":{"min":3,"max":9,"round":0,"notNull":true}}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: '7a5e77f3-fe51-43f4-a169-8872abc4a423',
			tips: ``,
			questType: 'MathInput',
			command: 'Observe o exemplo e complete.',
			quantity: 7,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt{|base_1|}}{\\sqrt{|base_2|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}'
						},
						{ type: 'latex', content: '\\sqrt{\\frac{|base_1|}{|base_2|}}' }
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_2":{"min":10,"max":19,"round":0,"notNull":false}}
									`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt[|index|]{|base_1|}}{\\sqrt[|index|]{|base_3|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}'
						},
						{ type: 'latex', content: '\\sqrt[|index|]{\\frac{|base_1|}{|base_3|}}' }
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_3":{"min":10,"max":19,"round":0,"notNull":false},
									\n"index":{"min":3,"max":99,"round":0,"notNull":true}}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\frac{\\sqrt[|index|]{c^{|base_1|}}}{\\sqrt[|index|]{d^{|base_3|}}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}'
						},
						{ type: 'latex', content: '\\sqrt[|index|]{\\frac{c^{|base_1|}}{d^{|base_3|}}}' }
					],
					scope: `{\n"base_1":{"min":20,"max":29,"round":0,"notNull":false},
									\n"base_3":{"min":10,"max":19,"round":0,"notNull":false},
									\n"index":{"min":3,"max":9,"round":0,"notNull":true}}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
