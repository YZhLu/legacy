import type { Section } from "$lib/types/Section";

export default {
	id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
	title: 'Resolução de equações do 2° grau incompletas em R',
	quests: [
		{
			id: '5f9b0714-123e-400b-9fa2-611c16300d28',
			tips: `Resolver uma equação é determinar seu
                        conjunto solução $S$.\\
                        1º caso: Quando os coeficientes $b$ e $c$ são nulos, ou seja, $b = 0$ e $c = 0$.\\
                        $b = 0$ e $c = 0$\\
                        $ax^2 = 0$\\
                        $$ x^2 = \\frac{0}{a}  → x^2 = 0  → x _. x = 0 → S = \\{0\\}$$\
                        2º caso: Quando somente o coeficiente $c$ é nulo, ou seja, $ b \\neq 0$ e $c = 0$\\
                        $ax2 + bx = 0$\\
                        Colocando x em evidência: $x (ax + b) = 0$, um produto só é nulo quando um dos fatores é zero; assim:\\
                        $x = 0$ ou $ax + b = 0$ → $x = \\frac{-b}{a} →$\\
                        $S = \\biggl\\{0,  \\frac{ -b } { a}  \\biggr\\}$\\
                        3º caso: Quando somente o coeficiente $b$ é nulo, ou seja, $b = 0$ e $c \\neq 0$\\
                        $ax^2 + c = 0 → ax^2 = -c → x^2 = \\frac{-c}{a}$\\
                        então, $x = \\pm \\sqrt{\\frac{-c}{a}}$ → $S = \\biggl\\{\\pm  \\sqrt{\\frac{-c}{a}}  \\biggr\\}$\\
                        `,
			questType: 'MathInput',
			command: 'Determine o conjunto solução das equações, sendo U = R.',
			quantity: 14,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace0\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^2 = 0' }],
					scope: '{\n"a":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace0,|c|\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x = 0' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":"formatToLatexFraction(fraction((|b|/|a|)*(-1)))"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `Resolver uma equação é determinar seu
                        conjunto solução $S$.\\
                        1º caso: Quando os coeficientes $b$ e $c$ são nulos, ou seja, $b = 0$ e $c = 0$.\\
                        $b = 0$ e $c = 0$\\
                        $ax^2 = 0$\\
                        $$ x^2 = \\frac{0}{a}  → x^2 = 0  → x _. x = 0 → S = \\{0\\}$$\
                        2º caso: Quando somente o coeficiente $c$ é nulo, ou seja, $ b \\neq 0$ e $c = 0$\\
                        $ax2 + bx = 0$\\
                        Colocando x em evidência: $x (ax + b) = 0$, um produto só é nulo quando um dos fatores é zero; assim:\\
                        $x = 0$ ou $ax + b = 0$ → $x = \\frac{-b}{a} →$\\
                        $S = \\biggl\\{0,  \\frac{ -b } { a}  \\biggr\\}$\\
                        3º caso: Quando somente o coeficiente $b$ é nulo, ou seja, $b = 0$ e $c \\neq 0$\\
                        $ax^2 + c = 0 → ax^2 = -c → x^2 = \\frac{-c}{a}$\\
                        então, $x = \\pm \\sqrt{\\frac{-c}{a}}$ → $S = \\biggl\\{\\pm  \\sqrt{\\frac{-c}{a}}  \\biggr\\}$\\
                        `
		},
		{
			id: '0e51397a-ceb8-44ac-b7d6-87287876fd57',
			tips: `Resolver uma equação é determinar seu
                        conjunto solução $S$.\\
                        1º caso: Quando os coeficientes $b$ e $c$ são nulos, ou seja, $b = 0$ e $c = 0$.\\
                        $b = 0$ e $c = 0$\\
                        $ax^2 = 0$\\
                        $$ x^2 = \\frac{0}{a}  → x^2 = 0  → x _. x = 0 → S = \\{0\\}$$\
                        2º caso: Quando somente o coeficiente $c$ é nulo, ou seja, $ b \\neq 0$ e $c = 0$\\
                        $ax2 + bx = 0$\\
                        Colocando x em evidência: $x (ax + b) = 0$, um produto só é nulo quando um dos fatores é zero; assim:\\
                        $x = 0$ ou $ax + b = 0$ → $x = \\frac{-b}{a} →$\\
                        $S = \\biggl\\{0,  \\frac{ -b } { a}  \\biggr\\}$\\
                        3º caso: Quando somente o coeficiente $b$ é nulo, ou seja, $b = 0$ e $c \\neq 0$\\
                        $ax^2 + c = 0 → ax^2 = -c → x^2 = \\frac{-c}{a}$\\
                        então, $x = \\pm \\sqrt{\\frac{-c}{a}}$ → $S = \\biggl\\{\\pm  \\sqrt{\\frac{-c}{a}}  \\biggr\\}$\\
                        `,
			questType: 'MathInput',
			command: 'Resolva as equações do 2º grau, sendo U = R:',
			quantity: 10,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace0\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^2 = 0' }],
					scope: '{\n"a":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x|,|a|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|a|,|x|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: 'x^2 |c| = 0' }],
					scope:
						'{\n"x":{"min":-10, "max":-2, "round":0, "notNull":true}, "c":"|x|*|x|", "a":"|x|*(-1)"}',
					userAnswerPlaceholder: 'S=\\placeholder'
				},
				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace\\right\\rbrace' }],
					body: [{ type: 'latex', content: 'x^2 |c| = 0' }],
					scope: '{\n"c":{"min":1, "max":100, "round":0, "notNull":true}}',
					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `Resolver uma equação é determinar seu
                        conjunto solução $S$.\\
                        1º caso: Quando os coeficientes $b$ e $c$ são nulos, ou seja, $b = 0$ e $c = 0$.\\
                        $b = 0$ e $c = 0$\\
                        $ax^2 = 0$\\
                        $$ x^2 = \\frac{0}{a}  → x^2 = 0  → x _. x = 0 → S = \\{0\\}$$\
                        2º caso: Quando somente o coeficiente $c$ é nulo, ou seja, $ b \\neq 0$ e $c = 0$\\
                        $ax2 + bx = 0$\\
                        Colocando x em evidência: $x (ax + b) = 0$, um produto só é nulo quando um dos fatores é zero; assim:\\
                        $x = 0$ ou $ax + b = 0$ → $x = \\frac{-b}{a} →$\\
                        $S = \\biggl\\{0,  \\frac{ -b } { a}  \\biggr\\}$\\
                        3º caso: Quando somente o coeficiente $b$ é nulo, ou seja, $b = 0$ e $c \\neq 0$\\
                        $ax^2 + c = 0 → ax^2 = -c → x^2 = \\frac{-c}{a}$\\
                        então, $x = \\pm \\sqrt{\\frac{-c}{a}}$ → $S = \\biggl\\{\\pm  \\sqrt{\\frac{-c}{a}}  \\biggr\\}$\\
                        `
		}
	]
} as Section;
