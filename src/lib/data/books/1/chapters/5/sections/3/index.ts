import type { Section } from "$lib/types/Section";

export default {
	id: '1ba230cd-e63e-4668-9399-1dc53dbc0439',
	title: 'Valor numérico de uma função polinomial de R em R',
	quests: [
		{
			id: '04439baf-a054-4043-af44-239176d56c58',
			tips: ``,
			questType: 'MathInput',
			command: '',
			quantity: 5,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'f(|x|) = |y|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Dado } f(x) = |a|x  |b| ~~(f: R \\rightarrow R),'
						},
						{
							type: 'latex',
							content: '\\text{calcule } f(|x|)'
						}
					],
					scope: `{
									\n"x":{"min":-1,"max":5,"round":0,"notNull":false},
									\n"a":{"min":-3,"max":3,"round":0,"notNull":false} ,
									\n"b":{"min":-10,"max":10,"round":0,"notNull":false},
									\n"y":"|a| * |x| + |b|"
									}`,

					userAnswerPlaceholder: 'f(|x|) = \\placeholder'
				}
			],
			instructions: ``
		},
		{
			id: '04439baf-a054-4043-af44-239176d56c58',
			tips: ``,
			questType: 'MathInput',
			command: '',
			quantity: 5,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'f(|x|) = |y|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Dado } f(x) = ~|a|x^2  |b|x |c| ~~(f: R \\rightarrow R),'
						},
						{
							type: 'latex',
							content: '\\text{calcule } f(|x|)'
						}
					],
					scope: `{
									\n"x":{"min":-5,"max":2,"round":0,"notNull":false},
									\n"a":{"min":-3,"max":3,"round":0,"notNull":true} ,
									\n"b":{"min":-10,"max":10,"round":0,"notNull":false},
									\n"c":{"min":-10,"max":10,"round":0,"notNull":false},
									\n"y":"|a| * |x|^2 + |b| * |x| + |c|"
									}`,

					userAnswerPlaceholder: 'f(|x|) = \\placeholder'
				}
			],
			instructions: ``
		},
		{
			id: '04439baf-a054-4043-af44-239176d56c58',
			tips: ``,
			questType: 'MathInput',
			command: '',
			quantity: 5,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x = \\pm|x|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Dado } f(x) = ~|a|x^2  |c| ~~(f: R \\rightarrow R),'
						},
						{
							type: 'latex',
							content: '\\text{calcule } x \\text{ para que se tenha } f(x) = |y|'
						}
					],
					scope: `{
									\n"x":{"min":-5,"max":5,"round":0,"notNull":true},
									\n"a":{"min":1,"max":3,"round":0,"notNull":true},
									\n"c":"|a|*|x|^2",
									\n"y":"|a| * |x|^2 + |c|"
									}`,
					userAnswerPlaceholder: 'x = \\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x = \\pm\\sqrt|r|'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Dado } f(x) = ~|a|x^2  |c| ~~(f: R \\rightarrow R),'
						},
						{
							type: 'latex',
							content: '\\text{calcule } x \\text{ para que se tenha } f(x) = |y|'
						}
					],
					scope: `{
									\n"x":{"min":2,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"a":{"min":1,"max":3,"round":0,"notNull":true},
									\n"c":"|a|*|x|",
									\n"y":"|a| * |x| + |c|",
									\n"r":"|c|/|a|"
									}`,

					userAnswerPlaceholder: 'x = \\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x = \\pm\\sqrt{|c|} \\notin R'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\text{Dado } f(x) = ~|a|x^2  |c| ~~(f: R \\rightarrow R),'
						},
						{
							type: 'latex',
							content: '\\text{calcule } x \\text{ para que se tenha } f(x) = |y|'
						}
					],
					scope: `{
									\n"x":{"min":-10,"max":-1,"round":0,"notNull":false},
									\n"a":{"min":1,"max":1,"round":0,"notNull":true},
									\n"c":{"min":-10,"max":-1,"round":0,"notNull":false},
									\n"c":"|x|^2",
									\n"y":"0"
									}`,

					userAnswerPlaceholder: 'x = \\placeholder'
				}
			],
			instructions: ``
		}
	]
} as Section;
