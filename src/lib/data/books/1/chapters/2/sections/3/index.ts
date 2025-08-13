import type { Section } from "$lib/types/Section";

export default {
	id: 'ca1216a3-fdc3-46b3-aa17-faa306d3749d',
	title: 'Resolução de equações do 2° grau completas em R',
	quests: [
		{
			id: '8fd9802e-ad4d-4381-b018-ae3e7ac59648',
			tips: `Exemplo: Determine as raízes da equação $x^2 – 7x + 6 = 0$:\\
                        $a = 1; b = – 7; c = 6$\\
                        $\\Delta = b^2 - 4ac = (-7)^2 - 4 _*1_*6 = $\\
                        $ 49 - 24 = 25 → \\Delta = 25$\\
                        $x =\\frac{-b \\pm \\sqrt{\\Delta}}{2_*a} = \\frac{7 \\pm \\sqrt{25}}{2_*1} = \\frac{7 \\pm 5 }{2}$\\
                        $x_1 = \\frac{7+5}{2} = x_1 = 6$\\
                        $x_2 = \\frac{7-5}{2} = x_2 = 1$\\
                        $S = \\{6, 1\\}$\\`,
			questType: 'MathInput',
			command: 'Resolva as equações do 2º grau em R.',
			quantity: 4,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"formatToLatexFraction(fraction((1/|a|)))",\n"b":"(|x1|+(1/|a|))*(|a|*(-1))",\n"c":"(|x1|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `Considere a equação completa $ax² + bx + c = 0.$\\
                        Para determinar os valores de $x$ que satisfazem essa equação (raízes),utilizamos o seguinte procedimento:\\
                        • Determinamos o valor do discriminante, por meio da expressão 
                                $$\\Delta = b^2 - 4ac$$\\
                                • Para determinar as raízes da equação, substituímos o valor obtido na fórmula de Bhaskara:\\
                                $$x =\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$ 
                        `
		},
		{
			id: '2e5497f3-8ed2-46c4-8050-1ad385e5f99a',
			tips: `Exemplo: Determine as raízes da equação $x^2 – 7x + 6 = 0$:\\
                        $a = 1; b = – 7; c = 6$\\
                        $\\Delta = b^2 - 4ac = (-7)^2 - 4 _*1_*6 = $\\
                        $ 49 - 24 = 25 → \\Delta = 25$\\
                        $x =\\frac{-b \\pm \\sqrt{\\Delta}}{2_*a} = \\frac{7 \\pm \\sqrt{25}}{2_*1} = \\frac{7 \\pm 5 }{2}$\\
                        $x_1 = \\frac{7+5}{2} = x_1 = 6$\\
                        $x_2 = \\frac{7-5}{2} = x_2 = 1$\\
                        $S = \\{6, 1\\}$\\`,
			questType: 'MathInput',
			command: 'Resolva as equações do 2º grau em R.',
			quantity: 17,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^2 |b|x |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"a":{"min":2, "max":10, "round":0, "notNull":true},\n"b":{"min":-10, "max":10, "round":0, "notNull":true},\n"c":"(|b|*|b|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace|x1|\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"|x1|",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^2  |b|x + |c| = 0' }],
					scope:
						'{\n"x":{"min":6, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":5, "round":0, "notNull":true},\n"x2":"formatToLatexFraction(fraction((1/|a|)))",\n"x1":"formatToLatexFraction(fraction((1/|x|)))",\n"b":"formatToLatexFraction(((1/|x|)+(1/|a|))*(|a|*(-1)))",\n"c":"formatToLatexFraction(fraction(1/|x|))"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `Considere a equação completa $ax² + bx + c = 0.$\\
                        Para determinar os valores de $x$ que satisfazem essa equação (raízes),utilizamos o seguinte procedimento:\\
                        • Determinamos o valor do discriminante, por meio da expressão 
                                $$\\Delta = b^2 - 4ac$$\\
                                • Para determinar as raízes da equação, substituímos o valor obtido na fórmula de Bhaskara:\\
                                $$x =\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$ 
                        `
		},
		{
			id: '45348a11-713a-470d-8670-66cd6b0fbae3',
			tips: `Exemplo: Determine as raízes da equação $x^2 – 7x + 6 = 0$:\\
                        $a = 1; b = – 7; c = 6$\\
                        $\\Delta = b^2 - 4ac = (-7)^2 - 4 _*1_*6 = $\\
                        $ 49 - 24 = 25 → \\Delta = 25$\\
                        $x =\\frac{-b \\pm \\sqrt{\\Delta}}{2_*a} = \\frac{7 \\pm \\sqrt{25}}{2_*1} = \\frac{7 \\pm 5 }{2}$\\
                        $x_1 = \\frac{7+5}{2} = x_1 = 6$\\
                        $x_2 = \\frac{7-5}{2} = x_2 = 1$\\
                        $S = \\{6, 1\\}$\\`,
			questType: 'MathInput',
			command: 'Resolva as equações em R.',
			quantity: 15,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace|s|\\right\\rbrace' }],
					body: [{ type: 'latex', content: '{(|a|x |c|)}^2 = 0' }],
					scope:
						'{\n"a":{"min":-9, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"s":"formatToLatexFraction(|c|/|a|*(-1))"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace\\right\\rbrace' }],
					body: [{ type: 'latex', content: '{(|a|x |c|)}^2 = |x|x^2' }],
					scope:
						'{\n"a":{"min":1, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"x":{"min":-9, "max":-1, "round":0, "notNull":true}}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: 'x(|a|x |b|) = |cneg|' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"cneg":"|c|*(-1)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|alpha|x^2 + x = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"0",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"alpha":"formatToLatexFraction(|a|/|b|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '\\frac{|c|}{x^2} =  \\frac{|beta|}{x} |alpha| ~ (x \\ne ~0)'
						}
					],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"alpha":"(-1)*(|a|)",\n"beta":"(-1)*(|b|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^2 |b|x |cprime| = |d|' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"d":{"min":-9, "max":9, "round":0, "notNull":true},\n"cprime":"(|c|+|d|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: 'x(2x - x) = |beta|x |cprime|' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":"1",\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"beta":"(-1)*|b|",\n"cprime":"(|c|*(-1))"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x|,|a|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|a|,|x|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '(x |a|)(x |x|) = 0' }],
					scope: '{\n"x":{"min":-100, "max":-2, "round":0, "notNull":true}, "a":"|x|*(-1)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '\\frac{|a|x^2 |b|x}{|d|} = \\frac{|cprime|}{|dprime|}'
						}
					],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true, "type":"even"},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"d":{"min":4, "max":9, "round":0, "notNull":true, "type":"even"},\n"cprime":"(|c|/(-2))",\n"dprime":"(|d|/2)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace0,|c|\\right\\rbrace' }],
					body: [{ type: 'latex', content: '\\frac{x^2}{|b|} + \\frac{x}{|a|} = 0' }],
					scope:
						'{\n"a":{"min":2, "max":20, "round":0, "notNull":true},\n"b":{"min":2, "max":20, "round":0, "notNull":true},\n"c":"formatToLatexFraction(fraction((|b|/|a|)*(-1)))"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace' }
					],
					body: [
						{
							type: 'latex',
							content: '|a|x^2 |b|x |cprime| = |d| = (x |x1prime|)(x |x2prime|)'
						}
					],
					scope:
						'{\n"x1":{"min":-9, "max":-1, "round":0, "notNull":true},\n"x2":{"min":1, "max":9, "round":0, "notNull":true},\n"a":"1",\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"z":{"min":1, "max":4, "round":0, "notNull":true},\n"x1prime":"(|x1|*(-1)-|z|)",\n"x2prime":"(|x2|*(-1))+|z|",\n"cprime":"(|x1prime|*|x2prime|)",\n"d":"(|c|*(-1)+|cprime|)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `Considere a equação completa $ax² + bx + c = 0.$\\
                        Para determinar os valores de $x$ que satisfazem essa equação (raízes),utilizamos o seguinte procedimento:\\
                        • Determinamos o valor do discriminante, por meio da expressão 
                                $$\\Delta = b^2 - 4ac$$\\
                                • Para determinar as raízes da equação, substituímos o valor obtido na fórmula de Bhaskara:\\
                                $$x =\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$ 
                        `
		}
	]
} as Section;
