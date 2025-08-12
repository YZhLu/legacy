import type { Section } from "$lib/types/Section";

export default {
	id: '64333e06-7d7b-4f16-8416-36f3308d589c',
	title: 'Formando uma equação do 2° grau a partir de suas raízes',
	quests: [
		{
			id: '127cce10-1667-4443-984c-2ed21f4fcca4',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Compor as equações do 2o grau (com a = 1) que têm por raízes:',
			quantity: 12,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|a|x^2 |b|x |c| = 0' }],
					body: [{ type: 'latex', content: '|x1|~e~|x2|' }],
					scope:
						'{\n"x1":{"min":-3, "max":3, "round":0},\n"x2":{"min":-3, "max":3, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
					userAnswerPlaceholder: 'x^2\\placeholder{}x\\placeholder{} = 0'
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		},
		{
			id: '8aed8a4b-0600-49a8-8ed6-fc210f3a09bc',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Ache dois números cuja soma e o produto sejam respectivamente:',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x1|~e~|x2|' }],
					body: [{ type: 'latex', content: '|s|~e~|p|' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
					userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}'
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		},
		{
			id: 'a09eeac7-6f50-4561-905f-43e671219afc',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Ache dois números cuja soma e o produto sejam respectivamente:',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x1|~e~|x2|' }],
					body: [{ type: 'latex', content: '|s|~e~|p|' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
					userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}'
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		},
		{
			id: '0f1f4b44-e1e0-4f7f-b453-c1bf76e4e755',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Ache dois números cuja soma e o produto sejam respectivamente:',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x1|~e~|x2|' }],
					body: [{ type: 'latex', content: '|s|~e~|p|' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
					userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}'
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		},
		{
			id: 'fb7ebba2-ff75-428f-bd18-b0189982e555',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Calcule m na equação',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x2|' }],
					body: [
						{
							type: 'latex',
							content: '|a|x^2 |b|x |m|m = 0,~de~modo~que~uma~raiz~seja~igual~a~|x1|'
						}
					],
					scope:
						'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":-1, "max":-5, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"-|x1|",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: ''
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		},
		{
			id: '080b422f-134a-4754-b67f-dc1f364b4975',
			tips: `
                        Exemplos:\\
                        1) Determine dois números cuja soma seja 20 e o produto 36.\\
                        $S = 20$\\
                        $P = 36$\\
                        → $x^2 - 20x + 36 = 0$\\
                        Resolvendo a equação:\\
                        $\\Delta = 400 - 4 \\cdot 1 \\cdot 36 $  \\
                        $\\Delta = 256 $  \\
                        $x = \\frac{20 \\pm \\sqrt{256}}{2}$\\
                        $x_1 = \\frac{20 + \\sqrt{16}}{2} = 18$  \\
                        $x_2 = \\frac{20 - \\sqrt{16}}{2} = 2$\\
                        Os números são 18 e 2.
                        \\
                        \\
                        2)Determine $m$ na equação $x^2 + 7x + m = 0$,de modo que uma raiz seja igual a 2.\\
                        $S = -7$ ou $x_1+ x_2 = -7$\\
                        $P = m$ ou $x_1 \\cdot x_2 = m$\\
                        Se $x_1 = 2 → 2 + x_2 = -7 →\\
                        x_2 = -7 - 2 → x_2 = -9$\\
                        Se $m = x_1 \\cdot x_2$ → $m = 2 \\cdot (-9) → m = -18$
                        `,
			questType: 'MathInput',
			command: 'Determine o valor de k na equação',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|s|' }],
					body: [
						{
							type: 'latex',
							content: '|a|x^2  |b|x  + (k |f|) = 0,~para~que~ela~tenha~duas~raízes~reais~e~iguais.'
						}
					],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: ''
				}
			],
			instructions: `
                        Formando uma equação do 2o grau a partir de suas raízes:\\
                        Considere a equação $ax^2 + bx + c = 0$ $(a \\neq 0)$.
                                        Dividindo-a por $a$, temos:
                                        $x^2 + \\frac{bx}{a} + \\frac{c}{a} = 0$

                                        Sendo\\
                                        $S = x_1 + x_2 = \\frac{-b}{a}$ e $P = x_1 \\cdot x_2 = \\frac{c}{a}$ ,                                        então, podemos escrever: $x^2 - Sx + P = 0$

                                        Exemplo:\\
                                        Compor a equação do 2° grau de raízes
                                        $x_1 = 8$ e $x_2 = 2$\\
                                        $S = x_1 + x_2 = 10$  \\
                                        $P = x_1 \\cdot x_2 = 16$\\
                                        → $x^2 - 10x + 16 = 0$
                                        \\`
		}
	]
} as Section;
