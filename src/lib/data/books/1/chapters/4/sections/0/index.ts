import type { Section } from "$lib/types/Section";

export default {
	id: '2e2845d3-70c0-474c-ae2b-bbdc73b195e9',
	title: 'Solução de um sistema de equações',
	quests: [
		{
			id: '2e1d665d-1cfc-4313-9e65-8ec42240e2fa',
			tips: ``,
			questType: 'MathInput',
			command: 'Resolva os sistemas de equações.',
			quantity: 5,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace\\left(|x1|,|y1|\\right);\\left(|x2|,|y2|\\right)\\right\\rbrace'
						},
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace\\left(|x2|,|y2|\\right);\\left(|x1|,|y1|\\right)\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'x + y = |s|'
						},
						{
							type: 'latex',
							content: 'x \\cdot y = |p|'
						}
						// {
						// 	type: 'latex',
						// 	content: 'y^2 - ~|s|y |p| = 0'
						// },
						// {
						// 	type: 'latex',
						// 	content: '\\{(|x1|,|y1|); (|x2|,|y2|)\\}'
						// }
					],
					scope: `{
									\n"y1":{"min":-10, "max":-1, "round":0, "notNull":true},
									\n"y2":{"min":1, "max":10, "round":0, "notNull":true},
									\n"s": "|y1| + |y2|",
									\n"x1": "|s| - |y1|",
									\n"x2": "|s| - |y2|",
									\n"p": "|y1|*|y2|"
									
									}`,
					userAnswerPlaceholder: `
								S=
								\\left\\lbrace\\left(\\placeholder\\quad,\\placeholder\\quad\\right);
								\\left(\\placeholder\\quad,\\placeholder\\quad\\right)\\right\\rbrace
								`
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace\\left(|x1|,|y1|\\right);\\left(|x2|,|y2|\\right)\\right\\rbrace'
						},
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace\\left(|x2|,|y2|\\right);\\left(|x1|,|y1|\\right)\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'x = |a|y'
						},
						{
							type: 'latex',
							content: '3x^2 + y^2 = |n|'
						}
						// {
						// 	type: 'latex',
						// 	content: '3*(|a|y)^2 + y^2 = |n|'
						// },
						// {
						// 	type: 'latex',
						// 	content: '3*|as|y^2 + y^2 = |n|'
						// },
						// {
						// 	type: 'latex',
						// 	content: '|p|y^2 + y^2 = |n|'
						// },
						// {
						// 	type: 'latex',
						// 	content: '|d|y^2 = |n|'
						// },
						// {
						// 	type: 'latex',
						// 	content: 'y^2 = |n|/|d|'
						// },
						// {
						// 	type: 'latex',
						// 	content: 'y = \\sqrt|y1|'
						// },
						// {
						// 	type: 'latex',
						// 	content: '|x2|,|y2|;|x1|,|y1|'
						// },
					],
					scope: `{
									\n"a":{"min":1, "max":10, "round":0, "notNull":true},
									\n"y1":{"min":1, "max":10, "round":0, "notNull":true},
									\n"y2":"-|y1|",
									\n"as":"|a|^2",
									\n"x1": "|a|*|y1|",
									\n"x2": "|a|*|y2|",
									\n"p": "3*|as|",
									\n"d": "|p|+1",
									\n"n": "|d|*(|y1|^2)"
									}`,
					userAnswerPlaceholder: `
								S=
								\\left\\lbrace\\left(\\placeholder\\quad,\\placeholder\\quad\\right);
								\\left(\\placeholder\\quad,\\placeholder\\quad\\right)\\right\\rbrace
								`
				}
			],
			instructions: `
                        `
		},
		{
			id: '15f881c2-ff95-4d49-8819-ed40f2b4c78a',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine a solução dos problemas a seguir.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Qual é o número que somado a seu quadrado resulta} ~|p|?'
						}
					],
					scope: `{
									\n"x2":{"min":1, "max":12, "round":0, "notNull":true},
									\n"x1": "-|x2| - 1",
									\n"s": "|x1| + |x2|",
									\n"p": "-|x1|*|x2|"
									
									}`,
					userAnswerPlaceholder: `
								S=\\placeholder
								`
				}
			],
			instructions: `
                        `
		},
		{
			id: '750a5b0a-6d73-40a2-838a-1633bff432a5',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine a solução dos problemas a seguir.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Um número ao quadrado mais o dobro desse número é igual a} ~|p|?'
						},
						{
							type: 'latex',
							content: '\\text{Qual é esse número?}'
						}
					],
					scope: `{
									\n"x2":{"min":1, "max":12, "round":0, "notNull":true},
									\n"x1": "-|x2| - 2",
									\n"s": "|x1| + |x2|",
									\n"p": "-|x1|*|x2|"
									
									}`,
					userAnswerPlaceholder: `
								S=\\placeholder
								`
				}
			],
			instructions: `
                        `
		},
		{
			id: '0e32f079-64f9-4edf-8a57-efdad46639ae',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine a solução dos problemas a seguir.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Um número ao quadrado menos o seu triplo é igual a} ~|p|?'
						},
						{
							type: 'latex',
							content: '\\text{Qual é esse número?}'
						}
					],
					scope: `{
									\n"x2":{"min":-10, "max":10, "round":0, "notNull":true},
									\n"x1": "-|x2| + 3",
									\n"s": "|x1| + |x2|",
									\n"p": "-|x1|*|x2|"
									
									}`,
					userAnswerPlaceholder: `
								S=\\placeholder
								`
				}
			],
			instructions: `
                        `
		},
		{
			id: '53267346-a5f9-45e1-9213-461813b73ebe',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine a solução dos problemas a seguir.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|f|' }],
					body: [
						{
							type: 'latex',
							content:
								'\\text{A soma das idades de um pai e de um de seus filhos é} ~|s| \\text{ anos,}'
						},
						{
							type: 'latex',
							content: '\\text{e a diferença dos quadrados das idades é} ~|d|.'
						},
						{
							type: 'latex',
							content: '\\text{Qual a idade do filho em anos?}'
						}
					],
					scope: `{
									\n"age":{"min":20, "max":30, "round":0, "notNull":true},
									\n"f":{"min":1, "max":30, "round":0, "notNull":true},
									\n"p": "|f| + |age|",
									\n"s": "|f| + |p|",
									\n"d": "|p|^2 - |f|^2"
									
									}`,
					userAnswerPlaceholder: `
								`
				},
				{
					correctAnswer: [{ type: 'latex', content: '|p|' }],
					body: [
						{
							type: 'latex',
							content:
								'\\text{A soma das idades de um pai e de um de seus filhos é} ~|s| \\text{ anos,}'
						},
						{
							type: 'latex',
							content: '\\text{e a diferença dos quadrados das idades é} ~|d|.'
						},
						{
							type: 'latex',
							content: '\\text{Qual a idade do pai em anos?}'
						}
					],
					scope: `{
									\n"age":{"min":20, "max":30, "round":0, "notNull":true},
									\n"f":{"min":1, "max":30, "round":0, "notNull":true},
									\n"p": "|f| + |age|",
									\n"s": "|f| + |p|",
									\n"d": "|p|^2 - |f|^2"
									
									}`,
					userAnswerPlaceholder: `
								`
				}
			],
			instructions: `
                        `
		},
		{
			id: '59470d39-7fd4-4139-969b-e96627f55f93',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine a solução dos problemas a seguir.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x2|' }],
					body: [
						{
							type: 'latex',
							content: '\\text{Quantos lados tem o polígono que possui} ~|n| \\text{ diagonais?}'
						},
						{
							type: 'latex',
							content: '\\text{Sugestão: usar} ~d = \\frac{(n-3)\\cdot n}{2} \\text{~, onde}'
						},
						{
							type: 'latex',
							content: '~d~\\text{= número de diagonais}'
						},
						{
							type: 'latex',
							content: '~n~\\text{= número de lados}'
						}
					],
					scope: `{
									\n"x2":{"min":3, "max":12, "round":0, "notNull":true},
									\n"x1": "-|x2| + 3",
									\n"s": "|x1| + |x2|",
									\n"p": "-|x1|*|x2|",
									\n"n": "|p|/2"
									
									}`,
					userAnswerPlaceholder: `
								`
				}
			],
			instructions: `
                        `
		}
	]
} as Section;
