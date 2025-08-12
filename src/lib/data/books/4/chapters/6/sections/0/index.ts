import type { Section } from "$lib/types/Section";

export default {
	id: 'b55ec6f7-da63-41c4-85ea-b05b41016cd8',
	title: 'Resoluções de inequações do 2° grau',
	quests: [
		{
			id: '8fd9802e-ad4d-4381-b018-ae3e7ac59648',
			tips: ``,
			questType: 'MathInput',
			command: 'Determine o conjunto verdade das inequações do 2º grau em R.',
			quantity: 9,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace x \\in R \\vert|x1| < x < |x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left(|x1|,|x2|\\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| < 0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":1, "max":3, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace x \\in R \\vert|x1| \\le x \\le|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left\\lbrack|x1|,|x2|\\right\\rbrack'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c|  \\le0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":1, "max":3, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace x \\in R \\vert|x1| < x <|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left(|x1|,|x2|\\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| > 0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":-3, "max":-1, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace x \\in R \\vert|x1| \\le x \\le|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left\\lbrack|x1|,|x2|\\right\\rbrack'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c|  \\ge0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":-3, "max":-1, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace\\right\\rbrace'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| < 0' }],
					scope: `{
										\n"x1":{"min":0, "max":0, "round":0, "notNull":false},
										\n"x2":{"min":0, "max":0, "round":0, "notNull":false},
										\n"a":{"min":-3, "max":3, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace x \\in R \\vert x<|x1| \\right\\rbrace \\cup\\left\\lbrace x \\in R \\vert x >|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left(-\\infty,|x1| \\right) \\cup\\left(|x2|, \\infty \\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| > 0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":1, "max":3, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace x \\in R \\vert x\\le|x1| \\right\\rbrace \\cup\\left\\lbrace x \\in R \\vert x \\ge|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content:
								'S=\\left(-\\infty,|x1| \\right\\rbrack \\cup\\left\\lbrack|x2|, \\infty \\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| \\ge0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":1, "max":3, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace x \\in R \\vert x\\le|x1| \\right\\rbrace \\cup\\left\\lbrace x \\in R \\vert x \\ge|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content:
								'S=\\left(-\\infty,|x1| \\right\\rbrack \\cup\\left\\lbrack|x2|, \\infty \\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| \\le0' }],
					scope: `{
										\n"x1":{"min":-10, "max":2, "round":0, "notNull":false},
										\n"x2":{"min":3, "max":10, "round":0, "notNull":true},
										\n"a":{"min":-3, "max":-1, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'S=\\left\\lbrace x \\in R \\vert x<|x1| \\right\\rbrace \\cup\\left\\lbrace x \\in R \\vert x >|x2| \\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left(-\\infty,|x1| \\right) \\cup\\left(|x2|, \\infty \\right)'
						}
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| < 0' }],
					scope: `{
										\n"x1":{"min":-10, "max":3, "round":0, "notNull":false},
										\n"x2":{"min":4, "max":10, "round":0, "notNull":true},
										\n"a":{"min":-3, "max":-1, "round":0, "notNull":true},
										\n"b":"(|x1|+|x2|)*(|a|*(-1))",
										\n"c":"(|x1|*|x2|)*(|a|)"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: ``
		}
	]
} as Section;
